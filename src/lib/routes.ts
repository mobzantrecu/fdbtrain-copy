import { isDev } from './constants'

// IMPORTANT
// To test a bug in a local environment, change this to localhost
const hostname = 'fauna.com'

// IMPORTANT
// When adding a new route, make sure to add support to it in the `resolveRoute` method
// for the Link component to work properly
// For non-nested routes, no work is needed.
const ROUTES = {
  fallback: '#',
  home: '/',
  features: '/features',
  pricing: '/pricing',
  resources: '/resources',
  about: '/about',
  clientServerless: '/client-serverless',
  blog: '/blog',
  compare: '/compare',
  feed: '/blog/feed',
  customers: '/customers',
  careers: '/careers',
  terms: '/terms',
  community: '/community',
  privacy: '/privacy',
  press: '/press',
  events: '/events',
  partners: '/partners',
  platform: '/platform',
  solutions: '/solutions',
  blogByCategory: (category: string) => `/blog?category=${category}`,
  blogPost: (slug?: string) => `/blog/${slug ? slug : '[slug]'}`,
  resourcesByCategory: (category: string) => `/resources?category=${category}`,
  partnersByCategory: (category: string) => `/partners?category=${category}`
}

const resolveRoute = (
  urlString: string | null | undefined
): { href: string; isExternal: boolean } => {
  if (!urlString) return { href: ROUTES.fallback, isExternal: false }
  try {
    const url = new URL(urlString)
    const { pathname, search, hash } = url
    if (url.hostname !== hostname) return { href: urlString, isExternal: true }
    // Is internal!

    if (pathname === '/') {
      // is home
      return {
        href: `${ROUTES.home}${search}${hash}` as string,
        isExternal: false
      }
    }

    const parts = pathname.split('/').filter((p) => !!p)

    if (parts.length === 1) {
      return {
        href: `/${parts[0]}${search}${hash}` as string,
        isExternal: false
      }
    }

    if (parts.length === 2) {
      switch (`/${parts[0]}`) {
        case ROUTES.blog:
          return {
            href: `${ROUTES.blogPost(parts[1])}${search}${hash}`,
            isExternal: false
          }
        case ROUTES.compare:
          return {
            href: `${ROUTES.compare}/${parts[1]}${search}${hash}`,
            isExternal: false
          }
        default:
          if (isDev) throw new Error(`Unsupported internal route ${parts[0]}`)
          return { href: ROUTES.fallback, isExternal: false }
      }
    }

    if (isDev) throw new Error(`Unsupported nested route ${urlString}`)

    return { href: ROUTES.fallback, isExternal: false }
  } catch (error) {
    return { href: urlString, isExternal: false }
  }
}

export default ROUTES
export { resolveRoute }
