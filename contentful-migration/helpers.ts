import TurndownService from 'turndown'
import { Asset } from './types'

function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

function sleepForRateLimiting(i: number) {
  // To prevent rate limiting errors
  const sleepBy = i * 5000
  return sleep(sleepBy)
}

function isImage(node: TurndownService.Node): node is HTMLImageElement {
  if ((node as HTMLImageElement).src) return true
  return false
}

function cleanAttribute(attribute: string) {
  return attribute ? attribute.replace(/(\n+\s*)+/g, '\n') : ''
}

function getContentfulFilenameFromAsset(asset: Asset) {
  return `${asset.id}-${asset.filename}`
}

export {
  sleep,
  sleepForRateLimiting,
  isImage,
  cleanAttribute,
  getContentfulFilenameFromAsset
}
