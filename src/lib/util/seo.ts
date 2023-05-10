import { MetadataFragment } from 'lib/contentful/generated'
import { NextSeo } from 'next-seo'

type NextSeoProps = React.ComponentPropsWithoutRef<typeof NextSeo>

const superDefaultSeo: NextSeoProps = {
  canonical: 'https://fauna.com',
  description:
    'Fauna is the data API of choice for our applications. The rich, versatile feature set helps us build business logic faster. It performs and auto scales irrespective of the load or size of data. It eliminates our database maintenance and operations overheads, thereby speeding up development while reducing costs.',
  openGraph: {
    url: 'https://fauna.com/',
    locale: 'en_US',
    type: 'website',
    site_name: 'Fauna'
  },
  twitter: {
    handle: '@fauna',
    site: '@fauna',
    cardType: 'summary_large_image'
  }
}

const getSeoFromMetadataFragment = (
  defaultMetadata: MetadataFragment | null | undefined,
  metadata: MetadataFragment | null | undefined,
  canonicalLink: string | null | undefined
) => {
  if (!defaultMetadata) return superDefaultSeo
  const defaultSeoProps: NextSeoProps = {
    ...superDefaultSeo,
    title: defaultMetadata.title ?? superDefaultSeo.title,
    canonical: defaultMetadata.url ?? superDefaultSeo.canonical,
    description: defaultMetadata.description ?? superDefaultSeo.description,
    openGraph: {
      ...superDefaultSeo.openGraph,
      url: defaultMetadata.url ?? superDefaultSeo.openGraph?.url,
      images: defaultMetadata.image
        ? [
            {
              url: defaultMetadata.image.url ?? '',
              width: defaultMetadata.image.width ?? 800,
              height: defaultMetadata.image.height ?? 600,
              alt:
                defaultMetadata.image.title ??
                `${defaultMetadata.title} OG Image`
            }
          ]
        : superDefaultSeo.openGraph?.images
    },
    twitter: {
      ...superDefaultSeo.twitter
    }
  }
  if (!metadata) return defaultSeoProps
  const nextSeoProps: NextSeoProps = {
    ...defaultSeoProps,
    title: metadata.title ?? defaultSeoProps.title,
    canonical: canonicalLink || (metadata.url ?? defaultSeoProps.canonical),
    description: metadata.description ?? defaultSeoProps.description,
    openGraph: {
      ...defaultSeoProps.openGraph,
      url: metadata.url ?? defaultSeoProps.openGraph?.url,
      images: metadata.image
        ? [
            {
              url: metadata.image.url ?? '',
              width: metadata.image.width ?? 800,
              height: metadata.image.height ?? 600,
              alt: metadata.image.title ?? `${metadata.title} OG Image`
            }
          ]
        : defaultSeoProps.openGraph?.images
    },
    twitter: {
      ...defaultSeoProps.twitter
    }
  }

  return nextSeoProps
}

export { getSeoFromMetadataFragment, superDefaultSeo }
