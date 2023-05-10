import PageLayout from 'components/layouts/page'
import contentfulSdk from 'lib/contentful'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import Section from 'components/sections'
import Hero from 'components/layouts/hero'
import CategoriesMenu, {
  getCategoryId
} from 'components/compound/categories-menu'
import { useRouter } from 'next/dist/client/router'

const ResourcesPage = ({
  page,
  generalData,
  preview
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter()
  const { category: queryCategory } = router.query

  const filteredSections = page?.sectionsCollection?.items.filter((section) => {
    if (!section?.title) {
      return null
    } else return getCategoryId(section?.title) === queryCategory
  })

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
          mb: ['-20px', '-77px'],
          '&>div>h1': {
            fontSize: '65px',
            lineHeight: '67px',
            fontWeight: 600,
            maxWidth: '50%',
            mb: '25px',
            '@media screen and (max-width: 680px)': {
              maxWidth: '100%',
              fontSize: '55px',
              lineHeight: '50px'
            }
          },
          '&>div>div': {
            maxWidth: '50%',
            '@media screen and (max-width: 680px)': {
              maxWidth: '90%',
              fontSize: '20px',
              lineHeight: '24px'
            }
          }
        }}
      >
        <CategoriesMenu
          sections={page?.sectionsCollection?.items}
          isResources={true}
        />
      </Hero>
      {filteredSections && filteredSections.length > 0
        ? filteredSections.map((section, idx) => (
            <Section key={`section-${idx}`} section={section} smallHeading />
          ))
        : page?.sectionsCollection?.items.map((section, idx) => (
            <Section key={`section-${idx}`} section={section} smallHeading />
          ))}
    </PageLayout>
  )
}

const getStaticProps = async (ctx: GetStaticPropsContext) => {
  const { learnCollection } = await contentfulSdk(ctx.preview).ResourcesPage({
    preview: ctx.preview
  })
  const { generalDataCollection } = await contentfulSdk(
    ctx.preview
  ).GeneralData({ preview: ctx.preview })

  return {
    props: {
      page: learnCollection?.items[0] ?? null,
      generalData: generalDataCollection?.items[0] ?? null,
      preview: ctx.preview ?? false
    },
    revalidate: 1
  }
}

export default ResourcesPage
export { getStaticProps }
