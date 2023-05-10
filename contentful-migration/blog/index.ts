require('dotenv').config()

const posts = require('../content/posts.json') as Post[]
const assets = require('../content/assets.json') as Asset[]
const users = require('../content/users.json') as User[]
const categories = require('../content/categories.json') as Category[]

import { createClient } from 'contentful-management'
import { Collection } from 'contentful-management/dist/typings/common-types'
import { Entry } from 'contentful-management/dist/typings/entities/entry'
import {
  Asset as ContentfulAsset,
  AssetProps
} from 'contentful-management/dist/typings/entities/asset'
import { Environment } from 'contentful-management/dist/typings/entities/environment'
import TurndownService from 'turndown'
import {
  getContentfulFilenameFromAsset,
  sleep,
  sleepForRateLimiting
} from '../helpers'
import {
  addGetAssetsRule,
  assetsTurndownService,
  postsTurndownService,
  addAssetResolverRule
} from './turndown-services'
import { Asset, Category, Post, User } from '../types'
import removeMd from 'remove-markdown'
import {
  categoriesId,
  environmentAlias,
  locale,
  personsId,
  postsId,
  postsToMigrateFrom,
  postsToMigrateTo
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

  const [existingPosts, initialExistingAssets] = await Promise.all([
    environment.getEntries({
      content_type: postsId,
      limit: 1000
    }),
    environment.getAssets({ limit: 1000 })
  ])

  const toMigrate = posts.slice(postsToMigrateFrom, postsToMigrateTo)

  const assetsToUpload: Asset[] = []
  addGetAssetsRule(assetsTurndownService, assetsToUpload)

  toMigrate.forEach((post) => {
    if (post.status !== 'live') return

    const alreadyExists = existingPosts.items.some((p) => {
      const slug = p.fields?.slug?.[locale]
      const title = p.fields?.title?.[locale]

      return slug === post.slug || title === post.title
    })

    if (alreadyExists) return

    // With this, we should have all assets saved to `assetsToUpload` array
    assetsTurndownService.turndown(post.blogBodyText)
  })

  let quantityToUpload = assetsToUpload.length
  const assetsUploadingPromises = assetsToUpload.map(
    async (assetToUpload, i) => {
      const fileName = getContentfulFilenameFromAsset(assetToUpload)

      if (
        initialExistingAssets.items.some(
          (a) => a.fields?.file?.[locale]?.fileName === fileName
        )
      ) {
        // Already exists
        quantityToUpload -= 1
        return
      }

      // To prevent rate limiting errors
      await sleepForRateLimiting(i)

      const promise = await environment
        .createAsset({
          fields: {
            title: { [locale]: assetToUpload.title },
            file: {
              [locale]: {
                fileName,
                contentType: assetToUpload.mimeType,
                upload: assetToUpload.url
              }
            }
          }
        })
        .then((a) => a.processForAllLocales())
        .then((a) => a.publish())
      return promise
    }
  )

  await Promise.all(assetsUploadingPromises)

  const currentExistingAssets = await environment.getAssets({ limit: 1000 })

  console.log('----------')
  console.log('Assets')
  console.log(`To upload:`, quantityToUpload)
  console.log(
    `Uploaded:`,
    currentExistingAssets.total - initialExistingAssets.total
  )
  console.log('----------')

  await sleep(5000) // Rest, lol

  // Prepare turndown service
  addAssetResolverRule(postsTurndownService, currentExistingAssets)

  let quantityToPost = toMigrate.length
  const postPromises = toMigrate.map(async (post, i) => {
    const alreadyExists = existingPosts.items.some((p) => {
      const slug = p.fields?.slug?.[locale]
      const title = p.fields?.title?.[locale]
      return slug === post.slug || title === post.title
    })

    if (alreadyExists || post.status !== 'live') {
      quantityToPost -= 1
      return
    }

    // To prevent rate limiting errors
    await sleepForRateLimiting(i)

    const { body, excerpt } = getBodyAndExcerpt(
      post.blogBodyText,
      postsTurndownService
    )

    const assetToUpload = getAsset(post.mainBlogImage[0])
    const coverImage = assetToUpload
      ? await getCoverImage(assetToUpload, environment, currentExistingAssets)
      : null

    const categories = await getCategories(post.blogCategory, environment)

    const authors = await getAuthors([post.authorId], environment)

    const newPostFields = {
      title: { [locale]: post.title },
      slug: { [locale]: post.slug },
      date: { [locale]: post.postDate },
      isCommunityPost: { [locale]: post.isCommunityPost },
      body: { [locale]: body },
      excerpt: { [locale]: excerpt },
      coverImage: coverImage ? { [locale]: coverImage } : null,
      categories: { [locale]: categories },
      authors: { [locale]: authors }
    }
    const newPost = await environment.createEntry(postsId, {
      fields: newPostFields
    })
    return newPost.publish()
  })
  await Promise.all(postPromises)

  console.log('Posts')
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

async function getCategories(
  postCategories: string[],
  environment: Environment
) {
  const categoriesToAdd: Entry[] = []

  const promises = postCategories.map(async (categoryId) => {
    const oldCategory = categories.find((c) => c.id.toString() === categoryId)
    if (!oldCategory) return
    const existingEntryQuery = await environment.getEntries({
      content_type: categoriesId,
      select: 'sys.id',
      'fields.title[match]': oldCategory.title
    })
    const existingCategory = existingEntryQuery.items[0]
    if (existingCategory) {
      categoriesToAdd.push(existingCategory)
      return
    }
    // Else upload
    const newCategory = await environment
      .createEntry(categoriesId, {
        fields: {
          title: { [locale]: oldCategory.title },
          slug: { [locale]: oldCategory.slug }
        }
      })
      .then((c) => c.publish())
    categoriesToAdd.push(newCategory)
  })

  await Promise.all(promises)
  return categoriesToAdd.map((c) => makeLink('Entry', c.sys.id))
}

async function getAuthors(postAuthors: string[], environment: Environment) {
  const usersToAdd: Entry[] = []

  const promises = postAuthors.map(async (userId) => {
    const oldUser = users.find((c) => c.id.toString() === userId)
    if (!oldUser) return
    const nameToUse = oldUser.fullName || oldUser.username

    const existingEntryQuery = await environment.getEntries({
      content_type: personsId,
      select: 'sys.id',
      'fields.name[match]': nameToUse
    })

    const existingUser = existingEntryQuery.items[0]
    if (existingUser) {
      usersToAdd.push(existingUser)
      return
    }
    // Else upload
    const newUser = await environment
      .createEntry(personsId, {
        fields: {
          name: { [locale]: nameToUse }
        }
      })
      .then((c) => c.publish())
    usersToAdd.push(newUser)
  })

  await Promise.all(promises)
  return usersToAdd.map((c) => makeLink('Entry', c.sys.id))
}

function getBodyAndExcerpt(html: string, service: TurndownService) {
  const markdownBody = service.turndown(html)

  const exceprtLength = 250

  let contentText = removeMd(markdownBody)
  // Trim and normalize whitespace in content text
  contentText = contentText.trim().replace(/\s+/g, ' ')
  let excerpt = contentText.slice(0, exceprtLength)

  if (contentText.length > exceprtLength) {
    excerpt += '...'
  }

  return { excerpt, body: markdownBody }
}
