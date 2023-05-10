import CookieDisclaimer from 'components/compound/cookie-disclaimer'
import Footer from 'components/sections/footer'
import Nav from 'components/sections/nav'
import { MediaFragment, MetadataFragment } from 'lib/contentful/generated'
import { getSeoFromMetadataFragment } from 'lib/util/seo'
import { NextSeo } from 'next-seo'
import { Box, SxStyleProp } from 'theme-ui'
import Head from 'next/head'
import { originURL } from 'lib/util/router'
import ROUTES from 'lib/routes'
import { useEffect, useMemo, useState } from 'react'
import PreviewButtons from 'components/compound/preview-buttons'

type Props = {
  navProps: React.ComponentPropsWithoutRef<typeof Nav>
  footerProps: React.ComponentPropsWithoutRef<typeof Footer>
  pushContentSx?: SxStyleProp
  defaultMetadata: MetadataFragment | null | undefined
  metadata: MetadataFragment | null | undefined
  favicon: MediaFragment | null | undefined
  faviconDarkMode: MediaFragment | null | undefined
  preview: boolean
  noindex?: boolean
  googleArticle?: {
    headline: string | undefined | null
    image: string | undefined | null
    body: string | undefined | null
    datePublished: string | undefined | null
    dateModified: string | undefined | null
    authorName: string | undefined | null
    logo?: string | undefined | null
  }
  canonicalLink?: string | null | undefined
}

const defaultInfo = {
  headline: 'Fauna',
  image: '/fauna-logo-new.png',
  body: '',
  datePublished: '',
  dateModified: '',
  authorName: '',
  logo: '/fauna-logo-new.png'
}

const PageLayout: React.FC<Props> = ({
  children,
  navProps,
  pushContentSx,
  footerProps,
  defaultMetadata,
  metadata,
  favicon,
  faviconDarkMode,
  preview,
  googleArticle = defaultInfo,
  noindex,
  canonicalLink
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    function onColorSchemeChange(e: MediaQueryListEvent) {
      setIsDarkMode(e.matches)
    }
    const matcher = window.matchMedia('(prefers-color-scheme: dark)')
    setIsDarkMode(matcher.matches)

    if (typeof matcher.addEventListener === 'function') {
      matcher.addEventListener('change', onColorSchemeChange)
      return () => matcher.removeEventListener('change', onColorSchemeChange)
    } else if (typeof matcher.addListener === 'function') {
      matcher.addListener(onColorSchemeChange)
      return () => matcher.removeListener(onColorSchemeChange)
    }
  }, [])

  const resolvedFavicon = useMemo(() => {
    if (preview) return '/images/preview-favicon.png'
    if (isDarkMode) return faviconDarkMode?.url || favicon?.url
    else return favicon?.url
  }, [preview, isDarkMode, favicon, faviconDarkMode])

  return (
    <>
      <NextSeo
        {...getSeoFromMetadataFragment(
          defaultMetadata,
          metadata,
          canonicalLink
        )}
        noindex={noindex}
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': 'https://google.com/article'
              },
              headline: googleArticle.headline,
              image: googleArticle.image,
              articleBody: googleArticle.body,
              datePublished: googleArticle.datePublished,
              dateModified: googleArticle.dateModified,
              author: {
                '@type': 'Person',
                name: googleArticle.authorName
              },
              publisher: {
                '@type': 'Organization',
                name: 'Fauna',
                logo: {
                  '@type': 'ImageObject',
                  url: googleArticle.logo
                }
              }
            })
          }}
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Blog by Fauna Inc"
          href={`${originURL}${ROUTES.feed}`}
        />
        {resolvedFavicon && (
          <link rel="icon" type="image/png" href={resolvedFavicon} />
        )}
      </Head>
      <Nav {...navProps} />
      <Box as="main" sx={{ position: 'relative', ...pushContentSx }}>
        {children}
      </Box>
      <Footer {...footerProps} />
      <CookieDisclaimer />
      {preview && (
        <Box
          sx={{ position: 'fixed', bottom: 4, right: 4, zIndex: 'general2' }}
        >
          <PreviewButtons />
        </Box>
      )}
    </>
  )
}

export default PageLayout
