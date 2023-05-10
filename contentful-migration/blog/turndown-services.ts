import { Collection } from 'contentful-management/dist/typings/common-types'
import {
  AssetProps,
  Asset as ContentfulAsset
} from 'contentful-management/dist/typings/entities/asset'
import TurndownService from 'turndown'
import {
  cleanAttribute,
  getContentfulFilenameFromAsset,
  isImage
} from '../helpers'
import { Asset } from '../types'
const turndownPluginGfm = require('turndown-plugin-gfm').gfm
const assets = require('../content/assets.json') as Asset[]

const postsTurndownService = new TurndownService({ codeBlockStyle: 'fenced' })
postsTurndownService.use(turndownPluginGfm)
postsTurndownService.addRule('customPreRule', {
  filter: ['pre'],
  replacement: (content) => {
    const fence = '```'
    let clean: string = content
    if (content.startsWith('\\')) {
      clean = content.substring(1)
    }
    return `\n${fence}\n${clean}\n${fence}\n`
  }
})

function getMarkdownImage(alt: string, titlePart: string, src: string) {
  return `![${alt}](${src} "${titlePart}")`
}

function addAssetResolverRule(
  service: TurndownService,
  contentfulAssets: Collection<ContentfulAsset, AssetProps>
) {
  service.addRule('AssetResolverRule', {
    filter: ['img'],
    replacement: (_, node) => {
      if (isImage(node)) {
        const alt = cleanAttribute(node.alt)
        const title = cleanAttribute(node.title)
        const titlePart = title ? ' "' + title + '"' : ''

        const asset = getAssetFromSrc(node.src)
        if (!asset) return getMarkdownImage(alt, titlePart, '')

        const fileName = getContentfulFilenameFromAsset(asset)
        const contentfulAsset = contentfulAssets.items.find(
          (a) => a.fields.file['en-US'].fileName === fileName
        )
        const src = contentfulAsset?.fields.file['en-US'].url
        return getMarkdownImage(alt, titlePart, src || '')
      }
      return ''
    }
  })
}

const assetsTurndownService = new TurndownService({ codeBlockStyle: 'fenced' })

function addGetAssetsRule(service: TurndownService, store: any[]) {
  service.addRule('GetAssetsRule', {
    filter: ['img'],
    replacement: (_, node) => {
      if (isImage(node)) {
        const asset = getAssetFromSrc(node.src)
        if (asset) store.push(asset)

        return ''
      }
      return ''
    }
  })
}

const numberPattern = /\d+/g

function getAssetFromSrc(src: string) {
  // src is something like {asset://8864:url||https://fauna.com/assets/site/bio-photos/Core-FQL-Part3-1.png}
  // or {asset:7057:url}

  const assetId = src.split(':url')[0].match(numberPattern)?.join('')
  const foundAsset = assets.find((a) => a.id.toString() === assetId)
  return foundAsset || null
}

export {
  postsTurndownService,
  assetsTurndownService,
  addAssetResolverRule,
  addGetAssetsRule
}
