/* eslint-disable no-useless-escape */
import { BuilderContent, BuilderComponent } from '@builder.io/react'
import CompaniesSlider from 'components/compound/companies-slider'
import HeroHome from 'components/layouts/hero-home'
import PageLayout from 'components/layouts/page'
import Section from 'components/sections'
import contentfulSdk from 'lib/contentful'
import AntiFlickeringBody from 'lib/scripts/anti-flicker'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { getBuilderContent } from '../builder/utils'
import { Suspense } from 'react'

const HomePage = ({
  page,
  generalData,
  preview,
  builderContent
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <AntiFlickeringBody />
    <PageLayout
      noindex={false}
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
      pushContentSx={{ overflow: 'hidden' }}
    >
      {page?.useBuilder ? (
        <>
          <Suspense fallback={<p>Loading</p>}>
            <BuilderContent
              options={{ includeRefs: true }}
              model="builder-section"
            >
              {() => {
                return (
                  <Suspense fallback={<p>Loading</p>}>
                    <BuilderComponent
                      model="builder-section"
                      content={builderContent}
                      options={{ includeRefs: true }}
                    />
                  </Suspense>
                )
              }}
            </BuilderContent>
          </Suspense>
        </>
      ) : (
        <>
          <HeroHome
            title={page?.heroTitle}
            subtitle={page?.heroSubtitle?.json}
            actions={page?.heroActionsCollection?.items}
            withoutLines={true}
            isAlt={true}
            isHome={true}
            image={page?.heroImage}
            pushSx={{
              maxWidth: 'none',
              margin: '0',
              height: [500, 500, 500, 500, 500, 530],
              backgroundColor: '#22184D',
              position: 'relative',
              '&>div:nth-of-type(1)': {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                '@media screen and (min-width: 1800px)': {
                  alignItems: 'flex-end'
                }
              },
              '&>div:nth-of-type(1)>div>div>div:nth-of-type(1)': {
                maxWidth: ['none', 'none', 'none', 'none', 'none', 'none'],
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
                fontSize: ['35px', '40px', '47px', '60px', '65px', '65px'],
                lineHeight: ['47px', '47px', '67px', '67px', '67px', '67px'],
                letterSpacing: '0px',
                fontWeight: 600,
                '@media screen and (max-width: 1055px) and (min-width: 1025px)': {
                  fontSize: '50px',
                  lineHeight: '50px'
                },
                '@media screen and (max-width: 960px) and (min-width: 832px)': {
                  fontSize: '50px',
                  lineHeight: '50px'
                },
                '@media screen and (max-width: 565px)': {
                  fontSize: '25px',
                  lineHeight: '35px'
                },
                '@media screen and (max-width: 380px)': {
                  fontSize: '25px',
                  lineHeight: '30px'
                }
              },
              '&>div:nth-of-type(1)>div>div>div:nth-of-type(1)>div>p': {
                textAlign: ['center', 'center', 'left', 'left', 'left', 'left'],
                fontSize: ['16px', '19px', '19px', '21px', '22px', '22px'],
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
                  mt: '10px',
                  fontSize: 16
                }
              }
            }}
          >
            {page?.companies && <CompaniesSlider {...page.companies} isAlt />}
          </HeroHome>

          {page?.sectionsCollection?.items.map((section, i) => (
            <Section
              key={`section-${i}`}
              section={section}
              isHome={true}
              isAlt={true}
            />
          ))}
        </>
      )}
    </PageLayout>
  </>
)

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  const [{ homeCollection }, { generalDataCollection }] = await Promise.all([
    contentfulSdk(ctx.preview).HomePage({
      preview: ctx.preview
    }),
    contentfulSdk(ctx.preview).GeneralData({ preview: ctx.preview })
  ])

  const homeData = homeCollection?.items.find((home) =>
    home?.metadata?.url?.includes('home')
  )

  const builderContent = await getBuilderContent('' || '')

  return {
    props: {
      page: homeData ?? null,
      generalData: generalDataCollection?.items[0] ?? null,
      preview: ctx.preview ?? false,
      builderContent: builderContent ?? null
    },
    revalidate: 1
  }
}

export default HomePage
