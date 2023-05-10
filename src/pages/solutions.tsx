/** @jsx jsx */
import { jsx } from 'theme-ui'
import PageLayout from 'components/layouts/page'
import contentfulSdk from 'lib/contentful'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import ViewportWidthBox from 'components/layouts/viewport-width-box'
import Section from 'components/sections'
import Hero from 'components/layouts/hero'
import NextImageMedia from 'components/primitives/next-image-media'

const SolutionsPage = ({
  page,
  generalData,
  preview
}: InferGetStaticPropsType<typeof getStaticProps>) => (
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
  >
    <Hero
      title={page?.heroTitle}
      subtitle={page?.heroSubtitle?.json}
      backgroundImageColor="blue"
      pushSx={{
        background: 'url(/images/backgrounds/features-background.png)',
        backgroundSize: 'cover',
        color: 'background',
        '&>div>h1': {
          letterSpacing: '0.5px',
          maxWidth: ['', '80%', '70%', '70%', '55%'],
          fontSize: ['32px', '40px', '40px', '50px', '65px'],
          lineHeight: ['40px', '40px', '40px', '50px', '67px']
        },
        '&>div:nth-of-type(1)>div>p': {
          maxWidth: ['', '80%', '70%', '70%', '800px'],
          m: ['auto', 'auto', 'auto', 'auto', '25px 0 0 54px'],
          fontSize: [14, 22]
        }
      }}
      withoutLines
      isFeatures={true}
    >
      <ViewportWidthBox sx={{ mb: 5, width: '100%' }}>
        {page?.heroImage && (
          <div
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mb: ['-48px', '-48px', '-80px', '-238px']
            }}
          >
            <NextImageMedia {...page?.heroImage} />
          </div>
        )}
      </ViewportWidthBox>
    </Hero>

    {page?.sectionsCollection?.items.map((section, i) => (
      <Section key={`section-${i}`} section={section} />
    ))}
  </PageLayout>
)

const getStaticProps = async (ctx: GetStaticPropsContext) => {
  const { featuresCollection } = await contentfulSdk(ctx.preview).SolutionsPage(
    {
      preview: ctx.preview
    }
  )
  const { generalDataCollection } = await contentfulSdk(
    ctx.preview
  ).GeneralData({ preview: ctx.preview })

  return {
    props: {
      page: featuresCollection?.items[0] ?? null,
      generalData: generalDataCollection?.items[0] ?? null,
      preview: ctx.preview ?? false
    },
    revalidate: 1
  }
}

export default SolutionsPage
export { getStaticProps }
