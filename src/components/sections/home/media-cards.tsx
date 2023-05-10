import MediaCard from 'components/cards/media'
import SectionLayout from 'components/layouts/section'
import { isDev } from 'lib/constants'
import { SectionFragment } from 'lib/contentful/generated'
import { Box, Grid } from 'theme-ui'

const MediaCardsSection = ({
  title,
  subtitle,
  blocksCollection,
  anchorLinkId,
  hasLinearBackground
}: SectionFragment) => {
  return (
    <Box sx={{ backgroundColor: 'mediaCards' }}>
      <SectionLayout
        anchorId={anchorLinkId}
        title={{ text: title }}
        subtitle={subtitle?.json}
        headingContainerPushSx={{
          pt: 3
        }}
        pushSx={{
          pb: 0,
          mb: hasLinearBackground ? '0px' : null,
          maxWidth: ['568px', '1024px', '1024px', '1024px', '1200px']
        }}
        smallContainer
        isMediaCards
      >
        <Grid variant="three" pb={'70px'}>
          {blocksCollection?.items.map((item) => {
            switch (item?.__typename) {
              case 'BlogPost':
                return (
                  <MediaCard
                    key={item?.slug}
                    title={item.title}
                    image={item.thumbnailImage ?? item.coverImage}
                    action={{
                      children: 'Read More',
                      href: `https://fauna.com/blog/${item.slug}`
                    }}
                  />
                )
              case 'SectionBlock': {
                const link = item.actionsCollection?.items[0]
                if (!link && isDev) {
                  throw new Error(`${item?.__typename} must have an action`)
                }
                return (
                  <MediaCard
                    key={item?.title}
                    title={item.title}
                    image={item.media}
                    action={{ children: 'Read More', href: link?.href }}
                  />
                )
              }
              case 'MediaBlock': {
                const link = item.action
                if (!link && isDev) {
                  throw new Error(`${item?.__typename} must have an action`)
                }
                return <MediaCard key={item?.title} {...item} />
              }
              default:
                if (isDev) {
                  throw new Error(`Unsupported block type, ${item?.__typename}`)
                }
                return null
            }
          })}
        </Grid>
      </SectionLayout>
    </Box>
  )
}

export default MediaCardsSection
