import contentfulSdk from 'lib/contentful'
import ROUTES from 'lib/routes'
import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { secret, slug, page } = req.query

  try {
    if (
      typeof secret !== 'string' ||
      secret !== process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_SECRET
    ) {
      return res.status(401).json({ message: 'Not authorized' })
    }

    let route: string | undefined = undefined

    if (typeof slug === 'string') {
      const { blogPostCollection } = await contentfulSdk(true).BlogPost({
        slug,
        preview: true
      })
      const post = blogPostCollection?.items[0]
      if (!post || !post.slug) {
        return res.status(404).json({ message: 'Not found' })
      }
      route = ROUTES.blogPost(post.slug)
    } else if (typeof page === 'string') {
      const data = await contentfulSdk(true).SingleTemplatePage({
        slug: page,
        preview: true
      })
      const foundTemplatePage = data.pageTemplateCollection?.items[0]
      // @ts-expect-error
      const routeCandidate = ROUTES[page.replace('/', '')]
      if (typeof routeCandidate !== 'string' && !foundTemplatePage) {
        return res.status(404).json({ message: 'Not found' })
      }
      route = routeCandidate || `/${foundTemplatePage?.slug}`
    } else {
      route = ROUTES.home
    }

    if (!route) {
      return res.status(400).json({ message: 'Bad request' })
    }

    res.setPreviewData({})

    res.redirect(route)
  } catch (error: any) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }
}
