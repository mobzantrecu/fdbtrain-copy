import PageLayout from 'components/layouts/page'
import Section from 'components/sections'
import contentfulSdk from 'lib/contentful'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import HeroHome from '../components/layouts/hero-home'
import { getBuilderContent } from '../builder/utils'

const FeaturesPage = ({
  page,
  generalData,
  builderContent,
  preview
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <Head>
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || []; window.dataLayer.push({'event': 'optimize.pricing-activate-1'});`
        }}
      />
    </Head>
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
      noindex={!!page?.noIndex}
    >
      <HeroHome
        title={page?.heroTitle}
        subtitle={page?.heroSubtitle?.json}
        actions={page?.heroActionsCollection?.items}
        withoutLines={true}
        isAlt={true}
        isHome={true}
        heroImage="/images/backgrounds/dark-light-curve-no-blue.png"
        pushSx={{
          maxWidth: 'none',
          margin: '0',
          height: [500, 500, 500, 500, 500, 530],
          backgroundColor: '#f9f9f9',
          position: 'relative',
          '&>div:nth-of-type(1)': {
            height: 464,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            '@media screen and (min-width: 1800px)': {
              alignItems: 'flex-end'
            },
            '&>div:nth-of-type(1)': {
              '&>div:nth-of-type(1)': {
                height: 464
              }
            }
          },
          '&>div:nth-of-type(1)>div>div>div:nth-of-type(1)': {
            maxWidth: ['none', 'none', '600px', '600px', '600px', '950px'],
            mt: ['24px', '24px', '50px', '60px', '78px', '78px'],
            ml: [0, 0, 35, 60, 100, 180],
            color: 'background',
            '@media screen and (max-width: 1500px) and (min-width: 1442px)': {
              ml: 70
            },
            '@media screen and (max-width: 1350px) and (min-width: 1280px)': {
              ml: 40
            },
            '@media screen and (max-width: 960px) and (min-width: 832px)': {
              ml: 0,
              mt: 80
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
          '&>div:nth-of-type(1)>div>div>div:nth-of-type(2)': {
            mt: ['15px', '15px', '0', '10px', '15px', '10px'],
            ml: [0, 0, 35, 60, 100, 180],
            display: 'flex',
            width: '100%',
            justifyContent: [
              'center',
              'center',
              'flex-start',
              'flex-start',
              'flex-start',
              'flex-start'
            ],
            '@media screen and (max-width: 380px)': {
              mt: '0'
            },
            '@media screen and (max-width: 1500px) and (min-width: 1442px)': {
              ml: 70
            },
            '@media screen and (max-width: 1350px) and (min-width: 1280px)': {
              ml: 40
            },
            '@media screen and (max-width: 960px) and (min-width: 832px)': {
              ml: 0
            }
          },
          '&>div:nth-of-type(1)>div>div>div:nth-of-type(1)>h1': {
            textAlign: ['center', 'center', 'left', 'left', 'left', 'left'],
            fontSize: ['55px', '55px', '55px', '60px', '65px', '65px'],
            lineHeight: '67px',
            letterSpacing: '0px',
            fontWeight: 600,
            '@media screen and (max-width: 960px) and (min-width: 832px)': {
              fontSize: '50px',
              lineHeight: '50px'
            },
            '@media screen and (max-width: 565px)': {
              fontSize: '45px',
              lineHeight: '50px'
            },
            '@media screen and (max-width: 380px)': {
              fontSize: '34px',
              lineHeight: '40px'
            }
          },
          '&>div:nth-of-type(1)>div>div>div:nth-of-type(1)>div>p': {
            textAlign: ['center', 'center', 'left', 'left', 'left', 'left'],
            fontSize: ['19px', '19px', '19px', '21px', '22px', '22px'],
            mt: ['28px', '28px', '-5px', '10px', '20px', '28px'],
            ml: '0',
            fontWeight: 400,
            letterSpacing: '0px',
            lineHeight: '26px',
            maxWidth: ['none', 'none', '490px', '540px', '570px', '570px'],
            '@media screen and (max-width: 960px) and (min-width: 832px)': {
              fontSize: '17px',
              lineHeight: '24px',
              maxWidth: '430px'
            },
            '@media screen and (max-width: 380px)': {
              mt: '15px'
            }
          }
        }}
      ></HeroHome>

      {page?.sectionsCollection?.items.map((section, i) => {
        return (
          <Section
            pageSlug="pricing"
            key={`section-${i}`}
            section={section}
            builderContent={builderContent}
            generalData={generalData}
          />
        )
      })}
    </PageLayout>
  </>
)

const getStaticProps = async (ctx: GetStaticPropsContext) => {
  const { pagePricingCollection } = await contentfulSdk(
    ctx.preview
  ).PricingPage({
    preview: ctx.preview
  })
  const { generalDataCollection } = await contentfulSdk(
    ctx.preview
  ).GeneralData({ preview: ctx.preview })

  const builderContent = await getBuilderContent('pricing' || '')

  return {
    props: {
      page: pagePricingCollection?.items[0] ?? null,
      generalData: generalDataCollection?.items[0] ?? null,
      preview: ctx.preview ?? false,
      builderContent: builderContent ?? null
    },
    revalidate: 1
  }
}

export default FeaturesPage
export { getStaticProps }
