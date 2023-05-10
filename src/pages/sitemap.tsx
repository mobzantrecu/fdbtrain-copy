/** @jsx jsx */
import { Grid, jsx, Container } from 'theme-ui'

import PageLayout from 'components/layouts/page'
import contentfulSdk from 'lib/contentful'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import Hero from 'components/layouts/hero'
import NextLink from 'next/link'

const metadata = {
  title: 'Sitemap',
  description: 'Sitemap',
  url: '/sitemap'
}

const Sitemap = ({
  generalData,
  page,
  preview,
  posts,
  templates,
  aboutPage,
  careersPage,
  blogPage,
  clientServerless,
  communityPage,
  customersPage,
  featuresPage,
  platformPage,
  solutionsPage,
  homePage,
  pressPage,
  pricingPage,
  resourcesPage,
  trustPage
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const uniqueYears = [
    ...new Set(posts?.items.map((item) => item?.date.substring(0, 4)))
  ]

  const pages = [
    aboutPage,
    careersPage,
    blogPage,
    clientServerless,
    communityPage,
    customersPage,
    featuresPage,
    platformPage,
    solutionsPage,
    homePage,
    pressPage,
    pricingPage,
    resourcesPage,
    trustPage
  ]

  const showingTemplates = templates?.items.filter(
    (each) => each?.hideFromSitemap !== true
  )

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
      metadata={metadata}
      defaultMetadata={generalData?.defaultMetadata}
      favicon={generalData?.favicon}
      faviconDarkMode={generalData?.faviconDarkMode}
      preview={preview}
    >
      <Hero
        title={page?.heroTitle}
        subtitle={page?.heroSubtitle?.json}
        withoutLines
      >
        <Container sx={{ pb: '64px', pt: '32px', px: ['0', '16px'] }}>
          <h1
            sx={{
              fontWeight: '500',
              fontSize: '32px',
              textAlign: 'left'
            }}
          >
            Site Pages
          </h1>
          <Grid
            sx={{
              gridTemplateColumns: [
                '1fr',
                '1fr 1fr',
                null,
                'repeat(3, 1fr)',
                'repeat(4, 1fr)'
              ],
              gap: ['25px', '30px 50px'],
              mt: ['32px', '64px']
            }}
          >
            {pages?.map((page, idx) =>
              page?.hideFromSitemap ? null : (
                <NextLink href={page?.metadata?.url ?? ''} passHref key={idx}>
                  <a
                    key={idx}
                    sx={{
                      fontSize: '16px',
                      lineHeight: '26px',
                      textAlign: 'left',
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                      ':hover': {
                        color: 'primary'
                      }
                    }}
                  >
                    {page?.metadata?.title?.replace('| Fauna', '')}
                  </a>
                </NextLink>
              )
            )}
            {showingTemplates?.map((template, idx) => (
              <NextLink href={`/${template?.slug}`} passHref key={idx}>
                <a
                  key={idx}
                  sx={{
                    fontSize: '16px',
                    lineHeight: '26px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    ':hover': {
                      color: 'primary'
                    }
                  }}
                >
                  {template?.metadata?.title?.replace('| Fauna', '')}
                </a>
              </NextLink>
            ))}
          </Grid>
        </Container>
        <Container sx={{ pb: '64px', pt: '32px', px: ['0', '16px'] }}>
          <h1
            sx={{
              fontWeight: '500',
              fontSize: '32px',
              textAlign: 'left'
            }}
          >
            Blog Posts
          </h1>
          {uniqueYears.map((each, idx) => (
            <div key={idx}>
              <h2
                sx={{
                  fontSize: '22px',
                  fontWeight: 'bold',
                  mt: ['56px', '80px'],
                  mb: ['32px', '50px'],
                  textAlign: 'left'
                }}
              >
                {each}
              </h2>
              <Grid
                sx={{
                  gridTemplateColumns: [
                    '1fr',
                    '1fr 1fr',
                    null,
                    'repeat(3, 1fr)',
                    'repeat(4, 1fr)'
                  ],
                  gap: ['25px', '30px 50px']
                }}
              >
                {posts?.items
                  .filter((post) => post?.date.substring(0, 4) === each)
                  .map((mappedPost, idx) => (
                    <NextLink
                      href={`/blog/${mappedPost?.slug}`}
                      passHref
                      key={idx}
                    >
                      <a
                        key={idx}
                        sx={{
                          fontSize: '16px',
                          lineHeight: '26px',
                          textAlign: 'left',
                          cursor: 'pointer',
                          transition: 'all 0.3s',
                          ':hover': {
                            color: 'primary'
                          }
                        }}
                      >
                        {mappedPost?.title}
                      </a>
                    </NextLink>
                  ))}
              </Grid>
            </div>
          ))}
        </Container>
      </Hero>
    </PageLayout>
  )
}

const getStaticProps = async (ctx: GetStaticPropsContext) => {
  const {
    blogCollection,
    blogPostCollection,
    communityCollection,
    companyCollection,
    featuresCollection,
    homeCollection,
    learnCollection,
    pageCareersCollection,
    pageCustomersCollection,
    pagePressCollection,
    pagePricingCollection,
    pageTemplateCollection,
    generalDataCollection,
    pageClientServerlessCollection,
    pageSitemapCollection,
    pageTrustCollection
  } = await contentfulSdk(ctx.preview).Sitemap({ preview: ctx.preview })

  return {
    props: {
      page: pageSitemapCollection?.items[0] ?? null,
      posts: blogPostCollection ?? null,
      generalData: generalDataCollection?.items[0] ?? null,
      preview: ctx.preview ?? false,
      templates: pageTemplateCollection,
      aboutPage: companyCollection?.items[0] ?? null,
      careersPage: pageCareersCollection?.items[0] ?? null,
      trustPage: pageTrustCollection?.items[0] ?? null,
      clientServerless: pageClientServerlessCollection?.items[0] ?? null,
      communityPage: communityCollection?.items[0] ?? null,
      customersPage: pageCustomersCollection?.items[0] ?? null,
      featuresPage: featuresCollection?.items[0] ?? null,
      platformPage: featuresCollection?.items[0] ?? null,
      solutionsPage: featuresCollection?.items[0] ?? null,
      homePage: homeCollection?.items[0] ?? null,
      pricingPage: pagePricingCollection?.items[0] ?? null,
      resourcesPage: learnCollection?.items[0] ?? null,
      pressPage: pagePressCollection?.items[0] ?? null,
      blogPage: blogCollection?.items[0] ?? null
    },
    revalidate: 1
  }
}

export default Sitemap
export { getStaticProps }
