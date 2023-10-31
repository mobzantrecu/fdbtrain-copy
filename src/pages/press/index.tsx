/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
React

import { Box, Card, Flex, Grid, Heading, Input, jsx, Text } from 'theme-ui'
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
import Paginator from 'components/compound/paginator'
import MediaCard from 'components/cards/media'
import { formatDate, postIsNew } from 'lib/util/blog'
import withHighlightedText from 'lib/contentful/renderers/highlight'
import defaultRenderer from 'lib/contentful/renderers'
import Link from 'components/primitives/link'
import NextImageMedia from 'components/primitives/next-image-media'

const pageSize = 12

const PressPage = ({
  page,
  featuredPost,
  posts,
  generalData,
  preview
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter()
  const { category, page: pageQuery, q } = router.query
  const pageNumber = pageQuery ? parseInt(pageQuery.toString()) - 1 : 0
  const [filteredPosts, setFilteredPosts] = useState<typeof posts>([])

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
      if (typeof q === 'string') {
        const lowerCased = q.toLowerCase()
        if (post?.title && post.title.toLowerCase().includes(lowerCased)) {
          return true
        }
        return false
      }
      return true
    })
    setFilteredPosts(filteredPosts)
  }, [category, q, posts])

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
      <SectionLayout
        pushSx={{
          width: '90%',
          py: '40px !important',
          '@media screen and (max-width: 425px)': { width: '100%', px: '20px' }
        }}
      >
        {featuredPost && (
          <Grid
            columns={['1fr', null, null, '5fr 2fr']}
            gap={'24px'}
            sx={{
              display: 'flex',
              height: 'fit-content',
              '@media screen and (max-width: 1024px)': {
                flexDirection: 'column'
              }
            }}
          >
            <FeaturedBlogPostCard
              title={featuredPost.title}
              image={featuredPost.coverImage}
              action={{
                children: 'Read More',
                href: featuredPost.action?.href
              }}
              isNew={postIsNew(featuredPost?.date)}
              date={formatDate(featuredPost?.date)}
              author={featuredPost.publicationName}
            />
            {page?.pressKitBlock && (
              <Card
                sx={{
                  boxShadow: 'cardInteractive',
                  transition: 'box-shadow .2s',
                  ':hover': {
                    boxShadow: 'cardHover'
                  }
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    pb: '48px',
                    pt: 2
                  }}
                >
                  <NextImageMedia {...page.pressKitBlock.media} />
                </Box>
                <Heading
                  variant="heading.base"
                  sx={{
                    fontSize: '28px !important',
                    mb: 3,
                    fontWeight: 600,
                    lineHeight: '34px'
                  }}
                >
                  {withHighlightedText(page.pressKitBlock.title)}
                </Heading>
                <Text variant="small">
                  {defaultRenderer(page.pressKitBlock.subtitle?.json)}
                </Text>
                <Link
                  {...page.pressKitBlock.actionsCollection?.items[0]}
                  sx={{
                    width: '100%',
                    mt: '24px',
                    maxHeight: '35px',
                    fontSize: '12px',
                    lineHeight: '16px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                  variant="buttons.primary"
                />
              </Card>
            )}
          </Grid>
        )}
        <Divider
          size="100%"
          mb="32px"
          pushSx={{ mt: ['64px', null, '80px'] }}
        />
        <Flex
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: ['column', 'row'],
            maxHeight: '36px'
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
                mr: 2
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
            '@media screen and (max-width: 639px)': { pt: '50px' }
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
                  image={post.coverImage}
                  action={{
                    children: 'Read More',
                    href: post.action?.href
                  }}
                  isNew={isNew}
                  date={formatDate(post?.date)}
                  author={post.publicationName}
                />
              )
            })}
        </Grid>
      </SectionLayout>
    </PageLayout>
  )
}

const getStaticProps = async (ctx: GetStaticPropsContext) => {
  const { pagePressCollection, pressPostCollection } = await contentfulSdk(
    ctx.preview
  ).PressPage({ preview: ctx.preview })
  const { generalDataCollection } = await contentfulSdk(
    ctx.preview
  ).GeneralData({ preview: ctx.preview })

  const sortedPosts =
    pressPostCollection?.items.sort(
      (a, b) => Date.parse(b?.date) - Date.parse(a?.date)
    ) ?? []

  const page = pagePressCollection?.items[0] ?? null
  const featuredPost = sortedPosts.find(
    (post) => post?.title === page?.featuredPost?.title
  )
  const posts = sortedPosts.filter(
    (post) => post?.title !== featuredPost?.title
  )

  return {
    props: {
      page,
      featuredPost,
      posts,
      generalData: generalDataCollection?.items[0] ?? null,
      preview: ctx.preview ?? false
    },
    revalidate: 1
  }
}

export default PressPage
export { getStaticProps }
