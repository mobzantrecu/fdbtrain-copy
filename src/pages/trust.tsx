import PageLayout from 'components/layouts/page'
import contentfulSdk from 'lib/contentful'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import Section from 'components/sections'
import Hero from 'components/layouts/hero'
import Status from 'components/sections/trust/status'
import { Container, Box } from 'theme-ui'

const TrustPage = ({
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
    <Container
      sx={{
        display: ['none', null, 'flex'],
        alignItems: 'center',
        justifyContent: 'flex-end',
        position: 'absolute',
        mx: 'auto',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 11,
        py: 0
      }}
    >
      <Status
        statusHref={generalData?.statusLink?.href ?? 'https://status.fauna.com'}
      />
    </Container>
    <Box sx={{ display: ['block', null, 'none'] }}>
      <Status
        statusHref={generalData?.statusLink?.href ?? 'https://status.fauna.com'}
        mobile
      />
    </Box>
    <Hero
      title={page?.heroTitle}
      pushSx={{ py: ['44px', null, '128px'] }}
      withoutLines
    />

    {page?.sectionsCollection?.items.map((section, i) => (
      <Section key={`section-${i}`} section={section} />
    ))}
  </PageLayout>
)

const getStaticProps = async (ctx: GetStaticPropsContext) => {
  const { pageTrustCollection } = await contentfulSdk(ctx.preview).TrustPage({
    preview: ctx.preview
  })
  const { generalDataCollection } = await contentfulSdk(
    ctx.preview
  ).GeneralData({ preview: ctx.preview })

  return {
    props: {
      page: pageTrustCollection?.items[0] ?? null,
      generalData: generalDataCollection?.items[0] ?? null,
      preview: ctx.preview ?? false
    },
    revalidate: 1
  }
}

export default TrustPage
export { getStaticProps }
