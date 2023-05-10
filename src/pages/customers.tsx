import PageLayout from 'components/layouts/page'
import contentfulSdk from 'lib/contentful'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import Section from 'components/sections'
import Hero from 'components/layouts/hero'
import Head from 'next/head'

const CustomersPage = ({
  page,
  generalData,
  preview
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <Head>
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `  window.dataLayer = window.dataLayer || []; window.dataLayer.push({'event': 'optimize.customers-activate'});`
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
      pushContentSx={{ backgroundColor: '#f9f9f9' }}
    >
      <Hero
        title={page?.heroTitle}
        subtitle={page?.heroSubtitle?.json}
        actions={page?.heroActionsCollection?.items}
        withoutLines
        pushSx={{
          '@media screen and (max-width: 350px)': {
            px: '10px'
          },
          '&>div>h1': {
            fontSize: '66px',
            lineHeight: '67px',
            fontWeight: 600
          }
        }}
      />

      {page?.sectionsCollection?.items.map((section, i) => (
        <Section
          key={`section-${i}`}
          section={section}
          sx={{ backgroundColor: '#f9f9f9' }}
        />
      ))}
    </PageLayout>
  </>
)

const getStaticProps = async (ctx: GetStaticPropsContext) => {
  const { pageCustomersCollection } = await contentfulSdk(
    ctx.preview
  ).CustomersPage({ preview: ctx.preview })
  const { generalDataCollection } = await contentfulSdk(
    ctx.preview
  ).GeneralData({ preview: ctx.preview })

  return {
    props: {
      page: pageCustomersCollection?.items[0] ?? null,
      generalData: generalDataCollection?.items[0] ?? null,
      preview: ctx.preview ?? false
    },
    revalidate: 1
  }
}

export default CustomersPage
export { getStaticProps }
