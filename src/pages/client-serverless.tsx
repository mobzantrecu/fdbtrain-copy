/** @jsx jsx */
import { jsx, Heading, Container } from 'theme-ui'
import PageLayout from 'components/layouts/page'
import contentfulSdk from 'lib/contentful'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'

import MarkdownBody from 'components/compound/markdown-body'
import withHighlightedText from 'lib/contentful/renderers/highlight'
import Section from 'components/sections'

const ClientServerlessPage = ({
  generalData,
  page,
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
    <Container variant="blogPost" pt={['64px', null, '80px']}>
      <Heading as="h1" variant="heading.1" sx={{ mb: 3 }}>
        {withHighlightedText(page?.title)}
      </Heading>
      <MarkdownBody source={page?.body ?? ''} />
    </Container>

    {page?.sectionsCollection?.items.map((section, i) => (
      <Section key={`section-${i}`} section={section} />
    ))}
  </PageLayout>
)

const getStaticProps = async (ctx: GetStaticPropsContext) => {
  const { generalDataCollection } = await contentfulSdk(
    ctx.preview
  ).GeneralData({ preview: ctx.preview })
  const { pageClientServerlessCollection } = await contentfulSdk(
    ctx.preview
  ).ClientServerlessPage({ preview: ctx.preview })

  return {
    props: {
      page: pageClientServerlessCollection?.items[0] ?? null,
      generalData: generalDataCollection?.items[0] ?? null,
      preview: ctx.preview ?? false
    },
    revalidate: 1
  }
}

export default ClientServerlessPage
export { getStaticProps }
