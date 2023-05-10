import contentfulSdk from 'lib/contentful'
import { BlogPostMetaFragment } from 'lib/contentful/generated'
import ROUTES from 'lib/routes'
import { originURL } from 'lib/util/router'
import { GetServerSideProps } from 'next'
import { Fragment } from 'react'

const DummyPage = () => <Fragment />

function formatDate(dateString: string) {
  return new Date(dateString).toUTCString()
}

const getServerSideProps: GetServerSideProps = async ({ res, preview }) => {
  const { blogPostCollection, blogCollection } = await contentfulSdk(
    preview
  ).BlogPage({ preview: preview })
  const description = blogCollection?.items[0]?.metadata?.description
  const blogPosts = (blogPostCollection?.items ?? []) as BlogPostMetaFragment[]

  res.setHeader('Content-Type', 'text/xml; charset=UTF-8')
  res.write(getRssXml(blogPosts, description))
  res.end()
  return { props: {} }
}

const getRssXml = (
  blogPosts: BlogPostMetaFragment[],
  description: string | null | undefined
) => {
  const shortDescription = description || ''
  const { rssItemsXml, latestPostDate } = blogPostsRssXml(blogPosts)
  return `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
      <channel>
          <title>Blog by Fauna Inc</title>
          <link>https://fauna.com</link>
          <description>${shortDescription}</description>
          <language>en</language>
          <lastBuildDate>${formatDate(latestPostDate)}</lastBuildDate>
          <atom:link href="${originURL}/blog/feed" rel="self" type="application/rss+xml" />
          ${rssItemsXml}
      </channel>
    </rss>`
}

const blogPostsRssXml = (blogPosts: BlogPostMetaFragment[]) => {
  let latestPostDate = ''
  let rssItemsXml = ''
  blogPosts.forEach((post) => {
    const postDate = Date.parse(post.date)
    if (!latestPostDate || postDate > Date.parse(latestPostDate)) {
      latestPostDate = post.date
    }

    const cleanTitle = post.title?.replace(/&/g, 'and') ?? ''
    const cleanExcerpt = post.excerpt?.replace(/&/g, 'and') ?? ''

    rssItemsXml += `
        <item>
          <title>${cleanTitle}</title>
          <link>
            ${originURL}${ROUTES.blogPost(post.slug ?? '')}
          </link>
          <guid>
            ${originURL}${ROUTES.blogPost(post.slug ?? '')}
          </guid>
          <pubDate>${formatDate(post.date)}</pubDate>
          <description>
          <![CDATA[${cleanExcerpt}]]>
          </description>
      </item>`
  })
  return { rssItemsXml, latestPostDate }
}

export default DummyPage
export { getServerSideProps }
