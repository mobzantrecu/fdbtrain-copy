/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
React

import { jsx } from 'theme-ui'

import PageLayout from 'components/layouts/page'
import contentfulSdk from 'lib/contentful'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import Section from 'components/sections'
import Hero from 'components/layouts/hero'
import CategoriesMenu, {
  getCategoryId
} from 'components/compound/categories-menu'
import { useRouter } from 'next/dist/client/router'
import Custom404 from './404'
import { useMemo } from 'react'

const PartnersPage = ({
  page,
  generalData,
  preview
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter()
  const { category: queryCategory } = router.query

  const filteredSections = useMemo(
    () =>
      page?.sectionsCollection?.items.filter((section) => {
        if (!section) return false
        if (
          section.type !== 'Customers Grid' ||
          !queryCategory ||
          queryCategory === 'all'
        ) {
          return true
        }
        if (!section.title) return false
        return getCategoryId(section.title) === queryCategory
      }),
    [page?.sectionsCollection?.items, queryCategory]
  )

  if (!page) return <Custom404 generalData={generalData} preview={preview} />

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
        withoutLines
        pushSx={{
          mb: ['0px', '-40px', '-75px'],
          '&>div>h1': {
            fontSize: ['32px', '40px', '40px', '65px'],
            lineHeight: ['40px', '40px', '40px', '67px'],
            fontWeight: 600
          },
          '&>div>div': {
            mt: '32px',
            maxWidth: ['', '', '55%'],
            '&>p': {
              fontSize: ['14px', '22px'],
              lineHeight: '26px'
            },
            mx: ['0px', '15px', 'auto']
          }
        }}
      >
        <CategoriesMenu
          partnersPage
          sections={page?.sectionsCollection?.items}
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
  const { pagePartnersCollection } = await contentfulSdk(
    ctx.preview
  ).PartnersPage({
    preview: ctx.preview
  })
  const { generalDataCollection } = await contentfulSdk(
    ctx.preview
  ).GeneralData({ preview: ctx.preview })

  return {
    props: {
      page: pagePartnersCollection?.items[0] ?? null,
      generalData: generalDataCollection?.items[0] ?? null,
      preview: ctx.preview ?? false
    },
    revalidate: 1
  }
}

export default PartnersPage
export { getStaticProps }
