import Hero from 'components/layouts/hero'
import HeroSignupForm from 'components/layouts/hero-signup-form'
import PageLayout from 'components/layouts/page'
import Loader from 'components/primitives/loader'
import Section from 'components/sections'
import contentfulSdk from 'lib/contentful'
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType
} from 'next'
import { useRouter } from 'next/router'
import { getBuilderContent } from '../builder/utils'
import Custom404 from './404'

const TemplatePages = ({
  page,
  generalData,
  builderContent,
  preview
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter()

  const slug = page?.slug || ''

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
          darkBackground: page?.darkBackground,
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
        noindex={!!page?.noIndex}
      >
        <Loader />
      </PageLayout>
    )
  }

  if (!page) {
    return <Custom404 generalData={generalData} preview={preview} />
  }

  return (
    <PageLayout
      navProps={{
        topNotification: generalData?.topNotification,
        centerLinks: generalData?.navMenuLinksCollection?.items,
        rightLinks: generalData?.navRightLinksCollection?.items,
        logo: generalData?.logo
      }}
      footerProps={{
        darkBackground: page?.darkBackground,
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
      noindex={!!page?.noIndex}
      pushContentSx={{
        backgroundColor: '#f9f9f9',
        '&>div:nth-of-type(2)>div>div': {
          my: '50px',
          '&>img': {
            backgroundColor: '#f9f9f9',
            boxShadow: 'none',
            p: '20px 20px',
            display: ['none', null, null, 'block']
          },
          '&>a': {
            boxShadow: 'none',
            p: '20px 20px',
            '&>span': {
              height: '50px',
              width: '50px',
              '&>img': { maxWidth: 'fit-content', width: 'fit-content' }
            }
          },
          '&>div': {
            '&>span': {
              flexShrink: 0,
              width: '55px',
              height: '50px'
            }
          }
        },
        '&>div:nth-of-type(2)>div>div>div>div': {
          '&>a': {
            '&>img': {
              width: '50px'
            }
          }
        },
        '&>div:nth-of-type(4)>a': {
          textTransform: 'uppercase',
          maxHeight: '35px',
          fontSize: '12px',
          letterSpacing: '0.05em'
        }
      }}
    >
      {page?.heroSignUpForm ? (
        <HeroSignupForm
          title={page.heroTitle}
          subtitle={page.heroSubtitle?.json}
          actions={page.heroActionsCollection?.items}
          slider={page.heroSlider}
          image={page?.heroImage}
          imageIsStacked={true}
          cookieDomain={generalData?.sufhCookieDomain}
          apiUrl={generalData?.sufhApiUrl}
          dashboardUrl={generalData?.sufhDashboardUrl}
          captchaSiteKey={generalData?.sufhCaptchaKey}
          withoutLines={!page.linesInHero}
          containerSx={{
            background: 'url(/images/backgrounds/features-background.png)',
            backgroundSize: 'cover'
          }}
          backGroundImageColor="blue"
          pushSx={{
            '&>div:nth-of-type(1)>h1': {
              textAlign: 'left'
            },
            '&>div:nth-of-type(1)>div>p': {
              maxWidth: '90%',
              m: '24px auto 0',
              textAlign: 'left'
            },
            color: 'background',
            '&>div>h1': {
              width: '90%',
              maxWidth: '90%',
              fontSize: ['32px', '40px', '40px', '48px', '65px'],
              lineHeight: ['40px', '40px', '40px', '50px', '60px'],
              fontWeight: 600
            },
            '&>div>div': {
              ml: 'auto',
              fontSize: [14, 18, 22],
              minWidth: '100%'
            }
          }}
        />
      ) : (
        <Hero
          title={page.heroTitle}
          subtitle={page.heroSubtitle?.json}
          actions={page.heroActionsCollection?.items}
          slider={page.heroSlider}
          image={page?.heroImage}
          imageIsStacked={page?.heroImageStacked}
          withoutLines={!page.linesInHero}
          containerSx={{
            background: 'url(/images/backgrounds/features-background.png)',
            backgroundSize: 'cover',
            '@media screen and (min-width: 832px)': {
              pb: page?.heroImage ? 0 : 18,
              pt: page?.heroImage ? 0 : 0,
              overflowX: 'hidden'
            },
            marginLeft:
              page?.heroImage && !page?.heroImageStacked ? 0 : '0 auto'
          }}
          backgroundImageColor="blue"
          pushSx={{
            '&>div:nth-of-type(1)': {
              mb: 24,
              maxWidth:
                page?.heroImage && !page?.heroImageStacked
                  ? ['none', 'none', '600px', '600px', '600px', '600px']
                  : 'none',
              mt:
                page?.heroImage && !page?.heroImageStacked
                  ? ['24px', '24px', '50px', '60px', '78px', '78px']
                  : 0,
              ml:
                page?.heroImage && !page?.heroImageStacked
                  ? [0, 0, 35, 60, 100, 180]
                  : 'auto',
              mr: page?.heroImage && !page?.heroImageStacked ? 0 : 'auto',
              color: 'background',
              '@media screen and (max-width: 1500px) and (min-width: 1442px)': {
                ml: page?.heroImage && !page?.heroImageStacked ? 70 : 'auto'
              },
              '@media screen and (max-width: 1350px) and (min-width: 1280px)': {
                ml: page?.heroImage && !page?.heroImageStacked ? 40 : 'auto'
              },
              '@media screen and (max-width: 960px) and (min-width: 832px)': {
                ml: page?.heroImage && !page?.heroImageStacked ? 0 : 'auto',
                mt: page?.heroImage && !page?.heroImageStacked ? 80 : 0
              },
              '@media screen and (max-width: 425px)': {
                mt: '-15px'
              },
              '@media screen and (max-width: 380px)': {
                mt: '10px'
              },
              '@media screen and (max-width: 320px)': {
                mt: '-10px'
              }
            },
            '&>div:nth-of-type(1)>div>p': {
              maxWidth: 900,
              m: '14px auto 0',
              textAlign:
                page?.heroImage && !page?.heroImageStacked
                  ? ['center', 'center', 'left', 'left', 'left', 'left']
                  : 'center'
            },
            '&>div:nth-of-type(1)>h1': {
              textAlign:
                page?.heroImage && !page?.heroImageStacked
                  ? ['center', 'center', 'left', 'left', 'left', 'left']
                  : 'center'
            },
            color: 'background',
            '&>div>h1': {
              width: '100%',
              maxWidth: page?.heroImage
                ? ['', '', '100%']
                : ['', '', '70%', '80%'],
              fontSize: ['32px', '40px', '40px', '48px', '65px'],
              lineHeight: ['40px', '40px', '40px', '50px', '60px'],
              fontWeight: 600
            },
            '&>div:nth-of-type(2)':
              page?.heroImage && !page?.heroImageStacked
                ? {
                    ml: [0, 0, 35, 60, 100, 180],
                    maxWidth: [
                      'none',
                      'none',
                      '600px',
                      '600px',
                      '600px',
                      '600px'
                    ],
                    '@media screen and (max-width: 1500px) and (min-width: 1442px)': {
                      ml: 70
                    },
                    '@media screen and (max-width: 1350px) and (min-width: 1280px)': {
                      ml: 40
                    },
                    '@media screen and (max-width: 960px) and (min-width: 832px)': {
                      ml: 0
                    }
                  }
                : {
                    margin: '0 auto'
                  },
            '&>div': {
              justifyContent: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems:
                page?.heroImage && !page?.heroImageStacked
                  ? ['center', 'center', 'flex-start']
                  : 'center'
            },
            '&>div>div': {
              ml: 'auto',
              fontSize: [14, 22],
              minWidth: '100%'
            }
          }}
        />
      )}

      {page.sectionsCollection?.items.map((section, i) => (
        <Section
          pageSlug={slug}
          builderContent={builderContent}
          key={`section-${i}`}
          section={section}
        />
      ))}
    </PageLayout>
  )
}

const getStaticPaths: GetStaticPaths = async () => {
  const {
    pageTemplateCollection
  } = await contentfulSdk().TemplatePagesForPaths()

  const paths: { params: { slug: string[] } }[] = []
  pageTemplateCollection?.items.forEach((page) => {
    if (page?.slug) {
      paths.push({ params: { slug: page.slug.split('/') } })
    }
  })

  return {
    paths,
    fallback: true
  }
}

const getStaticProps = async (ctx: GetStaticPropsContext) => {
  const slug = ctx.params?.slug
  if (!slug || typeof slug === 'string') {
    throw new Error(`Slug not present, or is a string: ${slug}`)
  }
  const realSlug = slug?.join('/')

  const [
    { pageTemplateCollection },
    { generalDataCollection }
  ] = await Promise.all([
    contentfulSdk(ctx.preview).SingleTemplatePage({
      preview: ctx.preview,
      slug: realSlug
    }),
    contentfulSdk(ctx.preview).GeneralData({ preview: ctx.preview })
  ])

  const page = pageTemplateCollection?.items[0]

  const builderContent = await getBuilderContent(page?.slug || '')

  return {
    props: {
      page: page ?? null,
      generalData: generalDataCollection?.items[0] ?? null,
      preview: ctx.preview ?? false,
      builderContent: builderContent ?? null
    },
    revalidate: 1
  }
}

export default TemplatePages
export { getStaticPaths, getStaticProps }
