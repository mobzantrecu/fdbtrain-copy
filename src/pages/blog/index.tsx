/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
React

import {
  Box,
  Card,
  Flex,
  Grid,
  Heading,
  Input,
  jsx,
  Link,
  Select,
  Text
} from 'theme-ui'
import PageLayout from 'components/layouts/page'
import contentfulSdk from 'lib/contentful'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import Divider from 'components/primitives/divider'
import FeaturedBlogPostCard from 'components/cards/featured-blog-post'
import SectionLayout from 'components/layouts/section'
import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/dist/client/router'
import { getAsPath } from 'lib/util/router'
import { FiSearch } from 'react-icons/fi'
import { CategoryFragment } from 'lib/contentful/generated'
import Paginator from 'components/compound/paginator'
import MediaCard from 'components/cards/media'
import ROUTES from 'lib/routes'
import { postIsNew, formatDate, renderAuthors } from 'lib/util/blog'
import defaultRenderer from 'lib/contentful/renderers'
import withHighlightedText from 'lib/contentful/renderers/highlight'
import Arrow from 'components/primitives/arrow'

const pageSize = 12

const BlogPage = ({
  page,
  featuredPost,
  posts,
  categories,
  generalData,
  preview
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter()
  const { category, page: pageQuery, q } = router.query
  const pageNumber = pageQuery ? parseInt(pageQuery.toString()) - 1 : 0
  const [filteredPosts, setFilteredPosts] = useState<typeof posts>([])

  const handleCategoryChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      router.push(
        getAsPath(router.asPath, { page: null, category: e.target.value })
      )
    },
    [router]
  )

  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const url = getAsPath(router.asPath, {
        page: null,
        q: e.target.value || null
      })
      router.push(url, url, { scroll: false })
    },
    [router]
  )

  useEffect(() => {
    const filteredPosts = posts.filter((post) => {
      if (
        category &&
        category !== 'all' &&
        !post?.categoriesCollection?.items?.some((c) => c?.slug === category)
      ) {
        return false
      }
      if (typeof q === 'string') {
        const lowerCased = q.toLowerCase()
        if (post?.excerpt && post.excerpt.toLowerCase().includes(lowerCased)) {
          return true
        }
        if (post?.title && post.title.toLowerCase().includes(lowerCased)) {
          return true
        }
        if (
          post?.authorsCollection?.items &&
          post?.authorsCollection?.items.find((a) =>
            a?.name?.toLocaleLowerCase().includes(lowerCased)
          )
        ) {
          return true
        }
        return false
      }
      return true
    })
    setFilteredPosts(filteredPosts)
  }, [category, q, posts])

  const action = page?.heroCardBlock?.actionsCollection?.items[0]

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
      metadata={page?.metadata}
      defaultMetadata={generalData?.defaultMetadata}
      favicon={generalData?.favicon}
      faviconDarkMode={generalData?.faviconDarkMode}
      preview={preview}
      pushContentSx={{ backgroundColor: '#f9f9f9' }}
    >
      <SectionLayout pushSx={{ backgroundColor: 'gray2', width: '90%' }}>
        {featuredPost && (
          <Grid
            columns={['1fr', null, null, null, '5fr 2fr']}
            gap={'24px'}
            sx={{
              display: 'flex',
              flexDirection: ['column', 'column', 'column', 'row', 'row']
            }}
          >
            <FeaturedBlogPostCard
              isBlog={true}
              title={featuredPost.title}
              image={
                page?.featuredPostImage ??
                featuredPost.thumbnailImage ??
                featuredPost.coverImage
              }
              action={{
                children: 'Read More',
                href: ROUTES.blogPost(featuredPost.slug as string)
              }}
              isNew={postIsNew(featuredPost?.date)}
              description={featuredPost.excerpt}
              date={formatDate(featuredPost?.date)}
              author={renderAuthors(featuredPost.authorsCollection?.items)}
            />
            <Box
              sx={
                {
                  display: 'flex',
                  flexDirection: 'column',
                  width: '56.4%',
                  '@media screen and (max-width: 1492px)': {
                    width: '66%'
                  },
                  '@media screen and (max-width: 1400px)': {
                    width: '70%'
                  },
                  '@media screen and (max-width: 1367px)': {
                    width: '75%'
                  },
                  '@media screen and (max-width: 1330px)': {
                    width: '80%'
                  },
                  '@media screen and (max-width: 1296px)': {
                    width: '85%'
                  },
                  '@media screen and (max-width: 1266px)': {
                    width: '90%'
                  },
                  '@media screen and (max-width: 1238px)': {
                    width: '95%'
                  },
                  '@media screen and (max-width: 1180px)': {
                    width: '100%'
                  },
                  '@media screen and (max-width: 1132px)': {
                    width: '105%'
                  },
                  '@media screen and (max-width: 1090px)': {
                    width: '115%'
                  },
                  '@media screen and (max-width: 1052px)': {
                    width: '130%'
                  },
                  '@media screen and (max-width: 1024px)': {
                    width: '100%'
                  }
                } as any
              }
            >
              <Card
                sx={{
                  p: '24px 23px',
                  mb: '26px',
                  flex: '1',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  boxShadow: 'card'
                }}
              >
                <div>
                  <Heading
                    variant="heading.3"
                    sx={{
                      m: '30px 0 0 3px',
                      lineHeight: '34px',
                      letterSpacing: '0px',
                      fontWeight: 600,
                      '@media screen and (max-width: 1238px)': {
                        fontSize: '26px'
                      },
                      '@media screen and (max-width: 1132px)': {
                        fontSize: '24px'
                      }
                    }}
                  >
                    {withHighlightedText(page?.newsletterCardBlock?.title)}
                  </Heading>
                  <Text
                    variant="small"
                    sx={{
                      m: '14px 0 8px 2px',
                      lineHeight: '20px',
                      '@media screen and (max-width: 1158)': {
                        fontSize: '13px'
                      }
                    }}
                  >
                    {defaultRenderer(page?.newsletterCardBlock?.subtitle?.json)}
                  </Text>
                  <iframe
                    title="subscribe to newsletter form"
                    src="https://www2.fauna.com/l/517431/2020-11-10/71k158"
                    sx={{ width: '100%' }}
                  />
                </div>
              </Card>
              {page?.heroCardBlock && (
                <Card sx={{ py: '25px', boxShadow: 'card' }}>
                  <Heading
                    variant="heading.3"
                    sx={{
                      m: '0 0 0 -9px',
                      fontSize: '28px',
                      letterSpacing: '0',
                      lineHeight: '34px',
                      fontWeight: 600,
                      '@media screen and (max-width: 1238px)': {
                        fontSize: '26px'
                      },
                      '@media screen and (max-width: 1132px)': {
                        fontSize: '24px'
                      }
                    }}
                  >
                    {withHighlightedText(page?.heroCardBlock.title)}
                  </Heading>
                  <Text
                    variant="small"
                    sx={{
                      m: '16px 0 0 -11px',
                      lineHeight: '20px',
                      '&>p': {
                        display: 'flex',
                        flexDirection: 'column',
                        '&>a': { m: '26px 0 0 1px', fontSize: '16px' }
                      },
                      '@media screen and (max-width: 1158)': {
                        fontSize: '13px'
                      }
                    }}
                  >
                    {defaultRenderer(page?.heroCardBlock.subtitle?.json)}
                  </Text>
                  <Link
                    href={action && action.href ? action.href : undefined}
                    as={action ? 'a' : 'div'}
                    variant="accent"
                    sx={{
                      width: '150px'
                    }}
                  >
                    {action && (
                      <Text sx={{ fontWeight: '600', mt: 3, ml: '-9px' }}>
                        {action.children}
                        <span sx={{ display: 'inline-flex', ml: 2 }}>
                          <Arrow />
                        </span>
                      </Text>
                    )}
                  </Link>
                </Card>
              )}
            </Box>
          </Grid>
        )}
        <Divider size="100%" pushSx={{ my: '48px' }} />
        <Flex
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: ['column', 'row'],
            maxHeight: '36px',
            '@media screen and (max-width: 639px)': {
              gap: '5px'
            }
          }}
        >
          <div
            sx={{
              display: 'flex',
              width: ['100%', 'unset'],
              flexDirection: ['column', 'row']
            }}
          >
            <label
              sx={{
                position: 'relative',
                width: ['100%', '238px'],
                mr: 2,
                mb: [3, 0]
              }}
              htmlFor="search"
            >
              <span
                sx={{
                  opacity: 0,
                  pointerEvents: 'none',
                  userSelect: 'none',
                  fontSize: '1px',
                  position: 'absolute',
                  bottom: '0',
                  left: '0'
                }}
              >
                Search
              </span>
              <i
                sx={{
                  position: 'absolute',
                  left: '8px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  fontSize: 4,
                  color: '#999999',
                  cursor: 'text'
                }}
              >
                <FiSearch />
              </i>
              <Input
                id="search"
                placeholder="Search by name"
                onChange={handleSearch}
                value={q ?? ''}
                sx={{
                  fontSize: 1,
                  width: ['100%', '238px'],
                  pl: '36px',
                  border: '1px solid #797E80',
                  borderRadius: '4px',
                  maxHeight: '36px'
                }}
              />
            </label>
            <Select
              id="selector"
              aria-label="selector"
              onChange={handleCategoryChange}
              value={category ?? 'all'}
              sx={{
                fontSize: 1,
                width: ['100%', '110px'],
                border: '1px solid #797E80',
                borderRadius: '4px',
                maxHeight: '36px',
                py: 0,
                pl: '4px'
              }}
            >
              <option value="all">Show all</option>
              {categories.map((category) => (
                <option
                  key={category.slug as string}
                  value={category.slug as string}
                >
                  {category.title}
                </option>
              ))}
            </Select>
          </div>
          <div
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: ['100%', 'unset']
            }}
          >
            <Paginator
              pages={Math.ceil(filteredPosts.length / pageSize)}
              currentPage={pageNumber}
              isInPage
              totalPosts={filteredPosts.length}
            />
            <div
              sx={{
                mt: [3, 0],
                width: ['100%', 'unset'],
                div: { width: '100%' }
              }}
            ></div>
          </div>
        </Flex>
        <Grid
          sx={{
            variant: 'layout.sectionContent',
            '@media screen and (max-width: 639px)': { pt: '100px' }
          }}
          variant="four"
        >
          {filteredPosts
            .slice(pageNumber * pageSize, pageNumber * pageSize + pageSize)
            ?.map((post) => {
              if (!post) return null
              const isNew = postIsNew(post?.date)
              return (
                <MediaCard
                  key={post.sys.id}
                  title={post.title}
                  image={post.thumbnailImage ?? post.coverImage}
                  action={{
                    children: 'Read More',
                    href: ROUTES.blogPost(post.slug as string)
                  }}
                  isNew={isNew}
                  date={formatDate(post?.lastUpdated || post?.date)}
                  author={renderAuthors(post.authorsCollection?.items)}
                />
              )
            })}
        </Grid>
      </SectionLayout>
    </PageLayout>
  )
}

const getStaticProps = async (ctx: GetStaticPropsContext) => {
  const { blogCollection, blogPostCollection } = await contentfulSdk(
    ctx.preview
  ).BlogPage({ preview: ctx.preview })
  const { generalDataCollection } = await contentfulSdk(
    ctx.preview
  ).GeneralData({ preview: ctx.preview })

  const sortedPosts =
    blogPostCollection?.items.sort((a, b) => {
      const date1 = b?.lastUpdated || b?.date
      const date2 = a?.lastUpdated || a?.date

      return Date.parse(date1) - Date.parse(date2)
    }) ?? []

  const categories: CategoryFragment[] = []
  sortedPosts?.forEach((post) => {
    post?.categoriesCollection?.items.forEach((category) => {
      if (category && !categories.some(({ slug }) => slug === category.slug)) {
        categories.push(category)
      }
    })
  })

  const page = blogCollection?.items[0] ?? null
  const featuredPost = sortedPosts.find(
    (post) => post?.slug === page?.featuredPost?.slug
  )

  return {
    props: {
      page,
      featuredPost,
      posts: sortedPosts,
      categories: categories.sort((a, b) =>
        (b.slug as string) > (a.slug as string) ? -1 : 1
      ),
      generalData: generalDataCollection?.items[0] ?? null,
      preview: ctx.preview ?? false
    },
    revalidate: 1
  }
}

export default BlogPage
export { getStaticProps }
