import MediaCard from 'components/cards/media'
import SectionLayout from 'components/layouts/section'
import { isDev } from 'lib/constants'
import { SectionFragment } from 'lib/contentful/generated'
import { Grid } from 'theme-ui'

type Props = SectionFragment &
  Pick<React.ComponentPropsWithoutRef<typeof SectionLayout>, 'smallHeading'>

const MediaSection = ({
  title,
  subtitle,
  blocksCollection,
  anchorLinkId
}: Props) => (
  <SectionLayout
    anchorId={anchorLinkId}
    title={{ text: title }}
    subtitle={subtitle?.json}
    // pushSx={{ mt: '-32px' }}
    pushSx={{
      backgroundColor: 'gray2',
      pb: ['50px', '50px', '50px'],
      py: '65px !important',
      '&>div>h2': {
        fontSize: ['32px', '48px']
      }
    }}
  >
    <Grid variant="four" sx={{ width: '90%', mx: 'auto' }}>
      {blocksCollection?.items.map((item, i) => {
        switch (item?.__typename) {
          case 'MediaBlock':
            return <MediaCard key={`${item?.title}-${i}`} {...item} />
          default:
            if (isDev) {
              throw new Error(`Unsupported block type, ${item?.__typename}`)
            }
            return null
        }
      })}
    </Grid>
  </SectionLayout>
)

export default MediaSection
