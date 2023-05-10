require('dotenv').config()

const pressPosts = require('../content/press.json') as PressPost[]
const assets = require('../content/assets.json') as Asset[]

import { createClient } from 'contentful-management'
import { Collection } from 'contentful-management/dist/typings/common-types'
import {
  Asset as ContentfulAsset,
  AssetProps
} from 'contentful-management/dist/typings/entities/asset'
import { Environment } from 'contentful-management/dist/typings/entities/environment'
import TurndownService from 'turndown'
import { sleepForRateLimiting } from '../helpers'
import { postsTurndownService } from '../blog/turndown-services'
import { Asset, PressPost } from '../types'
import removeMd from 'remove-markdown'
import {
  environmentAlias,
  locale,
  pressPostsId,
  postsToMigrateFrom,
  postsToMigrateTo,
  actionsId
} from '../constants'

const client = createClient({
  accessToken: process.env.CONTENTFUL_CONTENT_MANAGEMENT_ACCESS_TOKEN as string
})

// 1. Iterate through all posts and get all assets to be uploaded
// 2. Upload them to contentful
// 3. Go through all posts, resolve assets (and all other fields), and upload

async function main() {
  // This API call will request a space with the specified ID
  const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID as string)
  const environment = await space.getEnvironment(environmentAlias)

  const [existingPosts, existingAssets] = await Promise.all([
    environment.getEntries({
      content_type: pressPostsId,
      limit: 1000
    }),
    environment.getAssets({ limit: 1000 })
  ])

  const toMigrate = pressPosts.slice(postsToMigrateFrom, postsToMigrateTo)

  let quantityToPost = toMigrate.length
  const postPromises = toMigrate.map(async (post, i) => {
    const alreadyExists = existingPosts.items.some((p) => {
      const title = p.fields?.title?.[locale]
      return title === post.title
    })

    if (alreadyExists || post.status !== 'live') {
      quantityToPost -= 1
      return
    }

    // To prevent rate limiting errors
    await sleepForRateLimiting(i)

    const excerpt = getExcerpt(post.bodyText, postsTurndownService)

    const assetToUpload = getAsset(post.mainPressImage[0])
    const coverImage = assetToUpload
      ? await getCoverImage(assetToUpload, environment, existingAssets)
      : null

    const action = await getAction(post.linkUrl, environment)

    const newPostFields = {
      title: { [locale]: post.title },
      date: { [locale]: post.postDate },
      excerpt: { [locale]: excerpt },
      coverImage: coverImage ? { [locale]: coverImage } : null,
      publicationName: { [locale]: post.mediaSource },
      action: { [locale]: action }
    }
    const newPost = await environment.createEntry(pressPostsId, {
      fields: newPostFields
    })
    return newPost.publish()
  })
  await Promise.all(postPromises)

  console.log('Press Posts')
  console.log(`Uploaded:`, quantityToPost)
  console.log('----------')
  console.log('Success!')
}

main()

// HELPERS

function getAsset(id: string) {
  const asset = assets.find((asset) => asset.id.toString() === id)
  if (!asset) return null
  return asset
}

function makeLink(linkType: 'Entry' | 'Asset', id: string) {
  return { sys: { linkType, id, type: 'Link' } }
}

async function getCoverImage(
  assetToUpload: Asset,
  environment: Environment,
  existingAssets: Collection<ContentfulAsset, AssetProps>
) {
  const existing = existingAssets.items.find(
    (a) =>
      a.fields?.file?.[locale]?.fileName === assetToUpload.filename &&
      a.fields?.title?.[locale] === assetToUpload.title
  )

  if (existing) {
    // Already exists
    return makeLink('Asset', existing.sys.id)
  }

  const asset = await environment
    .createAsset({
      fields: {
        title: { [locale]: assetToUpload.title },
        file: {
          [locale]: {
            contentType: assetToUpload.mimeType,
            fileName: assetToUpload.filename,
            upload: assetToUpload.url
          }
        }
      }
    })
    .then((a) => a.processForAllLocales())
    .then((a) => a.publish())

  return makeLink('Asset', asset.sys.id)
}

async function getAction(url: string, environment: Environment) {
  const existingEntryQuery = await environment.getEntries({
    content_type: actionsId,
    select: 'sys.id',
    'fields.href[match]': url
  })

  const existingAction = existingEntryQuery.items[0]
  if (existingAction) {
    return makeLink('Entry', existingAction.sys.id)
  }
  // Else upload
  const newAction = await environment
    .createEntry(actionsId, {
      fields: {
        children: { [locale]: url },
        href: { [locale]: url }
      }
    })
    .then((c) => c.publish())
  return makeLink('Entry', newAction.sys.id)
}

function getExcerpt(html: string, service: TurndownService) {
  const markdownBody = service.turndown(html)

  const exceprtLength = 250

  let contentText = removeMd(markdownBody)
  // Trim and normalize whitespace in content text
  contentText = contentText.trim().replace(/\s+/g, ' ')
  let excerpt = contentText.slice(0, exceprtLength)

  if (contentText.length > exceprtLength) {
    excerpt += '...'
  }

  return excerpt
}
