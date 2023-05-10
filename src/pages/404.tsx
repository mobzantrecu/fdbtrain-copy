import Error404 from 'components/compound/error-404'
import PageLayout from 'components/layouts/page'
import contentfulSdk from 'lib/contentful'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'

const Custom404 = ({
  generalData,
  preview
}: InferGetStaticPropsType<typeof getStaticProps>) => {
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
      metadata={undefined}
      defaultMetadata={generalData?.defaultMetadata}
      favicon={generalData?.favicon}
      faviconDarkMode={generalData?.faviconDarkMode}
      preview={preview}
      noindex
    >
      <Error404 />
    </PageLayout>
  )
}

const getStaticProps = async (ctx: GetStaticPropsContext) => {
  const { generalDataCollection } = await contentfulSdk(
    ctx.preview
  ).GeneralData({ preview: ctx.preview })

  return {
    props: {
      generalData: generalDataCollection?.items[0] ?? null,
      preview: ctx.preview ?? false
    },
    revalidate: 1
  }
}

export default Custom404
export { getStaticProps }
