import PageLayout from 'components/layouts/page'
import contentfulSdk from 'lib/contentful'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import Section from 'components/sections'
import Hero from 'components/layouts/hero'

const CareersPage = ({
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
    pushContentSx={{ backgroundColor: '#f9f9f9' }}
  >
    <Hero
      title={page?.heroTitle}
      subtitle={page?.heroSubtitle?.json}
      actions={page?.heroActionsCollection?.items}
      withoutLines
      pushSx={{
        '@media screen and (max-width: 424px)': {
          px: '10px'
        },
        '&>div>h1': {
          fontSize: '65px',
          lineHeight: '67px',
          fontWeight: 600,
          '@media screen and (max-width: 424px)': {
            fontSize: '45px',
            lineHeight: '50px'
          }
        },
        '&>div:nth-of-type(2)': {
          m: '48px 0 16px 0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }
      }}
    />

    {page?.sectionsCollection?.items.map((section, i) => (
      <Section key={`section-${i}`} section={section} />
    ))}
  </PageLayout>
)

const getStaticProps = async (ctx: GetStaticPropsContext) => {
  const { pageCareersCollection } = await contentfulSdk(
    ctx.preview
  ).CareersPage({ preview: ctx.preview })
  const { generalDataCollection } = await contentfulSdk(
    ctx.preview
  ).GeneralData({ preview: ctx.preview })

  return {
    props: {
      page: pageCareersCollection?.items[0] ?? null,
      generalData: generalDataCollection?.items[0] ?? null,
      preview: ctx.preview ?? false
    },
    revalidate: 1
  }
}

export default CareersPage
export { getStaticProps }
