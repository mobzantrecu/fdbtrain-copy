/** @jsx jsx */
import MarkdownBody from 'components/compound/markdown-body'
import PageLayout from 'components/layouts/page'
import Link from 'components/primitives/link'
import Loader from 'components/primitives/loader'
import BlogPostFooter from 'components/sections/blog/post/footer'
// import NextImageMedia from 'components/primitives/next-image-media'
import contentfulSdk from 'lib/contentful'
import { Maybe } from 'lib/contentful/generated'
import ROUTES from 'lib/routes'
import { formatDate, postIsNew, renderAuthors } from 'lib/util/blog'
import { originURL } from 'lib/util/router'
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType
} from 'next'
import { useRouter } from 'next/dist/client/router'
import Custom404 from 'pages/404'
import Toc from 'react-toc'
import remark from 'remark'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'
import strip from 'strip-markdown'
import { Badge, Box, Card, Container, Heading, jsx, Text } from 'theme-ui'
import Arrow from 'components/primitives/arrow'
// import NextImageMediaContain from 'components/primitives/next-image-media-contain'

function cleanTOCText(text: RegExpMatchArray | null) {
  return text
    ? text
        .join('\r\n')
        .replace(
          /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|\uD83E[\uDD10-\uDDFF]|\*|[\u00a0/]|[[\]]|[()]|\b((?:https):).*)/g,
          ''
        )
    : ''
}

function mergeTOCText(
  bodyText: Maybe<string> | undefined,
  body2Text?: Maybe<string> | undefined
) {
  const bodyHeadings = bodyText
    ? cleanTOCText(bodyText.replace(/(```.+?```)/gms, '').match(/#{1,6}.+/g))
    : ''
  const body2Headings = body2Text
    ? cleanTOCText(body2Text.replace(/(```.+?```)/gms, '').match(/#{1,6}.+/g))
    : ''
  return bodyHeadings.concat('\r\n').concat(body2Headings).concat('\r\n')
}

const blogsWithoutIndexing = ['stepping-back']

const BlogPostPage = ({
  prevPostSlug,
  slug,
  nextPostSlug,
  relatedPosts,
  generalData,
  post,
  preview,
  remarkBody
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const noIndexed = blogsWithoutIndexing.includes(slug)
  const router = useRouter()
  const titles = ['####', '###', '##']
  const tocText = post ? mergeTOCText(post.body, post.body2) : ''
  const matchers = {
    '[?!:.,]': '',
    graphql: 'graph-ql',
    '’s': '-s',
    "'s": '-s',
    grpc: 'g-rpc',
    '&': 'and'
  }

  if (router.isFallback) {
    return (
      <PageLayout
        navProps={{
          topNotification: generalData?.topNotification,
          centerLinks: generalData?.navMenuLinksCollection?.items,
          rightLinks: generalData?.navRightLinksCollection?.items,
          logo: generalData?.logo
        }}
        footerProps={{
          lists: generalData?.footerLinksListsCollection?.items,
          socialMedia: generalData?.socialMedia,
          logo: generalData?.logo,
          statusLink: generalData?.statusLink,
          copyRightMessage: generalData?.copyrightMessage,
          rightSideLinks: generalData?.footerRightSideLinksCollection?.items
        }}
        metadata={undefined}
        defaultMetadata={generalData?.defaultMetadata}
        favicon={generalData?.favicon}
        faviconDarkMode={generalData?.faviconDarkMode}
        preview={preview}
      >
        <Loader />
      </PageLayout>
    )
  }

  if (!post) {
    return <Custom404 generalData={generalData} preview={preview} />
  }

  const googleArticleInfo = {
    headline: post.title,
    image: post.coverImage?.url,
    body: remarkBody,
    datePublished: post.date,
    dateModified: post.sys?.publishedAt,
    authorName: post.authorsCollection?.items[0]?.name,
    logo: generalData?.logoInPng?.url
  }

  return (
    <PageLayout
      noindex={noIndexed}
      navProps={{
        topNotification: generalData?.topNotification,
        centerLinks: generalData?.navMenuLinksCollection?.items,
        rightLinks: generalData?.navRightLinksCollection?.items,
        logo: generalData?.logo
      }}
      footerProps={{
        lists: generalData?.footerLinksListsCollection?.items,
        socialMedia: generalData?.socialMedia,
        logo: generalData?.logo,
        statusLink: generalData?.statusLink,
        copyRightMessage: generalData?.copyrightMessage,
        rightSideLinks: generalData?.footerRightSideLinksCollection?.items
      }}
      metadata={{
        title: post.metadata?.title ?? post?.title,
        image: post.metadata?.image ?? post?.coverImage,
        description: post.metadata?.description ?? post?.excerpt,
        url:
          post.canonicalLink ||
          (post.metadata?.url ?? post
            ? `${originURL}${ROUTES.blogPost(post.slug as string)}`
            : undefined)
      }}
      defaultMetadata={generalData?.defaultMetadata}
      favicon={generalData?.favicon}
      faviconDarkMode={generalData?.faviconDarkMode}
      preview={preview}
      googleArticle={googleArticleInfo}
      pushContentSx={{ backgroundColor: 'gray2', color: 'gray10' }}
      canonicalLink={post.canonicalLink}
    >
      <Box
        sx={{
          display: [null, null, null, null, 'flex'],
          width: [null, null, null, null, '75%'],
          margin: [null, null, null, null, '0 auto']
        }}
      >
        <Box sx={{ width: 400 }}>
          {relatedPosts && relatedPosts.length > 0 && (
            <Box
              sx={{
                mb: 5,
                pt: '40px',
                display: ['none', null, null, null, 'block'],
                alignSelf: 'flex-start',
                mr: 4
              }}
            >
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  border: 'none',
                  boxShadow: 'card'
                }}
              >
                <Heading
                  sx={{
                    color: 'gray8',
                    textTransform: 'uppercase',
                    mb: 2,
                    fontWeight: 600
                  }}
                >
                  Related posts
                </Heading>
                {relatedPosts &&
                  relatedPosts.map((relatedPost: any) => (
                    <Link
                      key={relatedPost.slug}
                      href={ROUTES.blogPost(relatedPost.slug)}
                      variant="nav"
                      sx={{
                        color: 'gray10',
                        transition: 'all .1s',
                        borderLeft: '2px solid #D9DFF1',
                        pl: 2,
                        py: 3,
                        pr: 2,
                        '&:hover': {
                          textShadow: '0.5px 0 0',
                          color: 'primary',
                          bg: 'lilac2',
                          borderLeft: '2px solid #604BE9'
                        }
                      }}
                    >
                      {relatedPost.title}
                      <span sx={{ ml: 1 }}>
                        <i className="fa-regular fa-2xs fa-arrow-up-right-from-square"></i>
                      </span>
                    </Link>
                  ))}
              </Card>
            </Box>
          )}
          <Box
            sx={{
              mb: 5,
              display: ['none', null, null, null, 'block'],
              alignSelf: 'flex-start',
              mr: 4
            }}
          >
            {generalData?.blogSignUpCardLink?.href && (
              <Link
                href={generalData?.blogSignUpCardLink?.href}
                sx={{
                  ':hover': {
                    textDecoration: 'none'
                  }
                }}
              >
                <Card
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    border: 'none',
                    boxShadow: 'card',
                    backgroundColor: '#9f7aea',
                    transition: 'background-color .2s',
                    my: 3,
                    '&:hover': {
                      background: '#805ad5'
                    }
                  }}
                >
                  <Heading
                    sx={{
                      color: 'background',
                      mb: 2,
                      fontWeight: 600
                    }}
                  >
                    Start for free
                    <span sx={{ display: 'inline-flex', ml: 2 }}>
                      <Arrow />
                    </span>
                  </Heading>
                  <Text sx={{ color: 'background', mb: 24 }}>
                    {generalData?.blogSignUpCardText}
                  </Text>
                  {/* {generalData?.blogSignUpCardImage && (
                    <NextImageMediaContain
                      {...generalData?.blogSignUpCardImage}
                      width={1200}
                      height={630}
                    />
                  )} */}
                </Card>
              </Link>
            )}
            {generalData?.blogReqADemoCardLink?.href && (
              <Link
                href={generalData?.blogReqADemoCardLink?.href}
                sx={{
                  ':hover': {
                    textDecoration: 'none'
                  }
                }}
              >
                <Card
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    border: 'none',
                    boxShadow: 'card',
                    backgroundColor: '#1a2c6b',
                    transition: 'background-color .2s',
                    '&:hover': {
                      background: '#101b42'
                    }
                  }}
                >
                  <Heading
                    sx={{
                      color: 'background',
                      mb: 2,
                      fontWeight: 600
                    }}
                  >
                    Request demo
                    <span sx={{ display: 'inline-flex', ml: 2 }}>
                      <Arrow />
                    </span>
                  </Heading>
                  <Text sx={{ color: 'background', mb: 24 }}>
                    {generalData?.blogReqADemoCardText}
                  </Text>
                  {/* {generalData?.blogReqADemoCardImage && (
                    <NextImageMediaContain
                      {...generalData?.blogReqADemoCardImage}
                      width={1200}
                      height={630}
                    />
                  )} */}
                </Card>
              </Link>
            )}
          </Box>{' '}
          {titles.some((item) => tocText.includes(item)) && (
            <Box
              sx={{
                display: ['none', null, null, null, 'block'],
                alignSelf: 'flex-start',
                position: 'sticky',
                overflowY: 'auto',
                overscrollBehavior: 'none',
                top: '150px',
                mr: 4
              }}
            >
              <SimpleBar style={{ height: 'calc(100vh - 10rem)' }}>
                <Heading
                  sx={{
                    color: 'gray8',
                    textTransform: 'uppercase',
                    mb: 2,
                    fontWeight: 600
                  }}
                >
                  Table of Contents
                </Heading>
                <Toc
                  markdownText={tocText}
                  titleLimit={50}
                  customMatchers={matchers}
                  sx={{
                    '&>ul>li': {
                      color: 'gray10',
                      transition: 'all .1s',
                      borderLeft: '2px solid #D9DFF1',
                      '&:hover': {
                        textShadow: '0.5px 0 0',
                        color: 'primary',
                        bg: 'lilac2',
                        borderLeft: '2px solid #604BE9'
                      }
                    },
                    '&>ul>li>a': {
                      pl: 2,
                      py: 3,
                      pr: 2,
                      display: 'inline-block',
                      width: '100%',
                      height: '100%'
                    },
                    '&>ul>ul>li>a': {
                      pl: 2,
                      py: 1,
                      display: 'inline-block',
                      width: '100%',
                      height: '100%'
                    },
                    '&>ul>ul>li': {
                      fontSize: 1,
                      color: 'gray10',
                      transition: 'all .1s',
                      py: 1,
                      ml: 3,
                      '&:hover': {
                        textShadow: '0.5px 0 0',
                        color: 'primary'
                      }
                    },
                    '&>ul>ul>ul>li>a': {
                      pl: 4,
                      py: 1,
                      display: 'inline-block',
                      width: '100%',
                      height: '100%'
                    },
                    '&>ul>ul>ul>li': {
                      fontSize: 1,
                      color: 'gray10',
                      transition: 'all .1s',
                      py: 1,
                      ml: 3,
                      '&:hover': {
                        textShadow: '0.5px 0 0',
                        color: 'primary'
                      }
                    }
                  }}
                />
              </SimpleBar>
            </Box>
          )}
        </Box>
        <Container variant="blogPost" sx={{ p: '40px 0 80px 0' }}>
          <div
            sx={{
              backgroundColor: '#fff',
              borderRadius: '8px',
              pb: '24px',
              boxShadow:
                '0px 1px 2px 1px rgba(47, 56, 61, 0.15), 0px 1px 2px rgba(47, 56, 61, 0.2)'
            }}
          >
            {post?.coverImage && (
              <div
                sx={{
                  maxWidth: '1200px',
                  mx: 'auto',
                  mb: '24px',
                  position: 'relative',
                  img: {
                    borderRadius: [0, null, null, 'lg'],
                    objectFit: 'contain'
                  }
                }}
              >
                <div
                  sx={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    zIndex: 10
                  }}
                >
                  {postIsNew(post?.date) && (
                    <Badge
                      variant="primary"
                      sx={{
                        backgroundColor: '#EEF7F7',
                        color: '#4C5A5A',
                        borderRadius: '8px',
                        p: '4px 8px',
                        '&:not(:last-of-type)': {
                          mr: 2
                        },
                        fontWeight: 400
                      }}
                    >
                      NEW
                    </Badge>
                  )}
                  {post?.isCommunityPost && (
                    <Badge variant="secondary">Community Contribution</Badge>
                  )}
                </div>
                {/* <NextImageMedia
                  {...post?.coverImage}
                  width={1200}
                  height={630}
                  sx={{ objectFit: 'cover' }}
                /> */}
              </div>
            )}
            <div sx={{ px: '24px' }}>
              <Heading
                as="h1"
                variant="heading.2"
                sx={{ pt: post?.coverImage ? '' : '20px' }}
              >
                {post?.title}
              </Heading>
              <div
                sx={{ mt: '24px', mb: 4, display: 'flex', flexWrap: 'wrap' }}
              >
                {renderAuthors(post?.authorsCollection?.items)}
                {post?.authorsCollection?.items.length ? (
                  <span sx={{ mx: 2 }}>|</span>
                ) : null}
                {formatDate(post?.date)}
                {post.lastUpdated && (
                  <span sx={{ ml: 1 }}>
                    (Last updated: {formatDate(post?.lastUpdated)})
                  </span>
                )}
                {post?.categoriesCollection?.items.length ? (
                  <>
                    <span sx={{ mx: 2 }}>|</span>
                    <div sx={{ display: 'flex', flexWrap: 'wrap' }}>
                      <p sx={{ mr: '7px' }}>Categories:</p>
                      {post?.categoriesCollection?.items.map(
                        (category, i, { length }) => {
                          if (!category?.slug) return null

                          const isNotLast = i < length - 1

                          return (
                            <Link
                              href={ROUTES.blogByCategory(category.slug)}
                              key={category.slug}
                              variant="accent"
                              sx={{
                                mr: isNotLast ? '10px' : '0'
                              }}
                            >
                              {category.title}
                            </Link>
                          )
                        }
                      )}
                    </div>
                  </>
                ) : null}
              </div>
              <MarkdownBody source={post?.body ?? ''} />
            </div>
          </div>
          {post.body2 ? <MarkdownBody source={post.body2} /> : null}
          <BlogPostFooter
            prevPostSlug={prevPostSlug}
            nextPostSlug={nextPostSlug}
            slug={post?.slug}
            title={post?.title}
            excerpt={post?.excerpt}
            footerText={generalData?.blogPostFooterText}
            newsletterBlock={generalData?.blogPostNewsletterBlock}
          />
        </Container>
      </Box>
    </PageLayout>
  )
}

const getStaticPaths: GetStaticPaths = async () => {
  const { blogPostCollection } = await contentfulSdk().BlogPostsSlugs()

  const paths: { params: { slug: string[] } }[] = []
  blogPostCollection?.items.forEach((post) => {
    if (post?.slug) {
      paths.push({ params: { slug: post.slug.split('/') } })
    }
    post?.additionalSlugs?.forEach((additionalSlug) => {
      if (additionalSlug) {
        paths.push({ params: { slug: additionalSlug.split('/') } })
      }
    })
  })

  return {
    paths,
    fallback: true
  }
}

const getStaticProps = async (ctx: GetStaticPropsContext) => {
  let prevPostSlug, nextPostSlug
  const slug = ctx.params?.slug

  if (!slug || typeof slug === 'string') {
    throw new Error(`Slug not present, or is a string: ${slug}`)
  }

  const realSlug = slug?.join('/')

  const { generalDataCollection } = await contentfulSdk(
    ctx.preview
  ).GeneralData({ preview: ctx.preview })

  const { blogPostCollection } = await contentfulSdk(ctx.preview).BlogPost({
    slug: realSlug,
    preview: ctx.preview
  })

  const maxRelatedPosts = 3
  const autoGenRelatedPosts: any = []

  const { blogPostCollection: bpc } = await contentfulSdk(
    ctx.preview
  ).BlogPage({ preview: ctx.preview })
  const sortedPosts =
    bpc?.items.sort((a, b) => {
      const date1 = b?.lastUpdated || b?.date
      const date2 = a?.lastUpdated || a?.date

      return Date.parse(date1) - Date.parse(date2)
    }) ?? []

  sortedPosts.forEach((post, index) => {
    const sortedPostCategories = post?.categoriesCollection?.items.map(
      (category) => category?.slug
    )
    const blogPostCategories = blogPostCollection?.items[0]?.categoriesCollection?.items.map(
      (category) => category?.slug
    )
    if (
      sortedPostCategories?.some((category) =>
        blogPostCategories?.includes(category)
      ) &&
      post?.slug !== blogPostCollection?.items[0]?.slug
    ) {
      if (post?.hideFromRelatedPosts !== true) {
        autoGenRelatedPosts.push({
          slug: post?.slug,
          title: post?.title,
          date: post?.date,
          lastUpdated: post?.lastUpdated,
          categories: post?.categoriesCollection?.items.map((cat) => cat?.slug),
          order: sortedPostCategories?.filter((category) =>
            blogPostCategories?.includes(category)
          ).length
        })
      }
    }

    if (post?.slug === blogPostCollection?.items[0]?.slug) {
      prevPostSlug = sortedPosts[index - 1] ? sortedPosts[index - 1]?.slug : ''
      nextPostSlug = sortedPosts[index + 1] ? sortedPosts[index + 1]?.slug : ''
    }
  })

  const manSetRelatedPosts =
    blogPostCollection?.items[0]?.relatedPostsCollection?.items
  let relatedPosts: any = manSetRelatedPosts
  if (manSetRelatedPosts && manSetRelatedPosts?.length < maxRelatedPosts) {
    const remainingItems = maxRelatedPosts - manSetRelatedPosts?.length
    relatedPosts = manSetRelatedPosts.concat(
      autoGenRelatedPosts.slice(0, remainingItems)
    )
  }

  let body = ''

  remark()
    .use(strip)
    .process(blogPostCollection?.items[0]?.body ?? '', (err, file) => {
      if (file) {
        body = String(file)
      } else {
        console.error(err)
      }
    })

  return {
    props: {
      slug: realSlug,
      prevPostSlug: prevPostSlug,
      nextPostSlug: nextPostSlug,
      relatedPosts: relatedPosts
        ? relatedPosts
            .sort((a: any, b: any) => {
              const date1 = b?.lastUpdated || b?.date
              const date2 = a?.lastUpdated || a?.date

              return Date.parse(date1) - Date.parse(date2)
            })
            .slice(0, maxRelatedPosts)
        : '',
      post: blogPostCollection?.items[0] ?? null,
      generalData: generalDataCollection?.items[0] ?? null,
      remarkBody: body ?? null,
      preview: ctx.preview ?? false
    },
    revalidate: 1
  }
}

export default BlogPostPage
export { getStaticProps, getStaticPaths }
