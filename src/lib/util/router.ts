import { isDev } from 'lib/constants'

const originURL = 'https://fauna.com'

type QueryParams = { [key: string]: string | null }

const getAsPath = (
  asPath: string,
  newQueryParams: QueryParams,
  override = true
) => {
  const uri = new URL(asPath, originURL)

  Object.keys(newQueryParams).forEach((key) => {
    const value = newQueryParams[key]
    if (value === null) {
      if (override) uri.searchParams.delete(key)
      return
    }
    if (uri.searchParams.has(key) && override) {
      uri.searchParams.delete(key)
    }
    uri.searchParams.append(key, value)
  })

  return `${uri.pathname}${uri.search}`
}

function isInRoute(routerPathname: string, candidatePathname: string) {
  let candidateUrl: URL | undefined = undefined

  try {
    // Try if it's a full url
    candidateUrl = new URL(candidatePathname)
  } catch (error) {
    // do nothing
  }

  try {
    if (!candidateUrl) {
      // create internal url
      candidateUrl = new URL(candidatePathname, originURL)
    }
    const realUrl = new URL(routerPathname, originURL)

    if (realUrl.hostname !== candidateUrl.hostname) return false

    const realParts = realUrl.pathname.split('/')
    const candidateParts = candidateUrl.pathname.split('/')
    return candidateParts.every((part, i) => part === realParts[i])
  } catch (error) {
    if (isDev) throw error
    return false
  }
}

export { getAsPath, isInRoute }
export { originURL }
