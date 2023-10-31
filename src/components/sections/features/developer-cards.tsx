import MediaCard from 'components/cards/media'
import LanguagesSlider from 'components/compound/languages-slider'
import SectionLayout from 'components/layouts/section'
import { isDev } from 'lib/constants'
import { SectionFragment } from 'lib/contentful/generated'
import { Box, Grid } from 'theme-ui'

const DeveloperCardsSection = ({
  title,
  subtitle,
  blocksCollection,
  logosCollection,
  anchorLinkId
}: SectionFragment) => (
  <Box sx={{ backgroundColor: 'gray2' }}>
    <SectionLayout
      anchorId={anchorLinkId}
      title={{ text: title }}
      subtitle={subtitle?.json}
      smallContainer
      largeWidth
      pushSx={{
        '&>div>h1': {
          maxWidth: ['', '', '70%', '50%'],
          fontSize: ['32px', '40px', '40px', '65px'],
          lineHeight: ['40px', '40px', '40px', '67px']
        },
        '&>div:nth-of-type(1)>div>p': {
          maxWidth: ['', '', '', '800px'],
          m: ['', '', '', '25px 0 0 54px'],
          fontSize: [14, 22]
        }
      }}
    >
      {logosCollection && (
        <LanguagesSlider {...logosCollection} pushSx={{ mb: 3 }} />
      )}
      <Grid sx={{ variant: 'layout.sectionContent' }} variant="three">
        {blocksCollection?.items.map((item) => {
          switch (item?.__typename) {
            case 'SectionBlock': {
              const link = item.actionsCollection?.items[0]
              return (
                <MediaCard
                  key={item?.title as any}
                  title={item?.title}
                  description={item.subtitle}
                  image={item.media}
                  action={link}
                />
              )
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

export default DeveloperCardsSection
