import PageLayout from 'components/layouts/page'
import contentfulSdk from 'lib/contentful'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import Section from 'components/sections'
import Hero from 'components/layouts/hero'

const TeamPage = ({
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
      withoutLines
      pushSx={{
        '@media screen and (max-width: 425px)': {
          px: '10px'
        },
        '&>div>h1': {
          fontSize: '65px',
          lineHeight: '67px',
          fontWeight: 700,
          maxWidth: '950px',
          '@media screen and (max-width: 425px)': {
            fontSize: '50px',
            lineHeight: '50px'
          }
        },
        'div>p': {
          maxWidth: '800px',
          margin: '0 auto',
          '@media screen and (max-width: 425px)': {
            px: '15px'
          }
        },
        backgroundColor: 'gray2'
      }}
    />

    {page?.sectionsCollection?.items.map((section, i) => (
      <Section key={`section-${i}`} section={section} />
    ))}
  </PageLayout>
)

const getStaticProps = async (ctx: GetStaticPropsContext) => {
  const { companyCollection } = await contentfulSdk(ctx.preview).TeamPage({
    preview: ctx.preview
  })
  const { generalDataCollection } = await contentfulSdk(
    ctx.preview
  ).GeneralData({ preview: ctx.preview })

  return {
    props: {
      page: companyCollection?.items[0] ?? null,
      generalData: generalDataCollection?.items[0] ?? null,
      preview: ctx.preview ?? false
    },
    revalidate: 1
  }
}

export default TeamPage
export { getStaticProps }
