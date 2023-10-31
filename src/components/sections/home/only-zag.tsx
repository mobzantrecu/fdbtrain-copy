import SectionLayout from 'components/layouts/section'
import SectionBlockWithIllustration from 'components/sectionBlocks/with-illustration'
import { isDev } from 'lib/constants'
import { SectionFragment } from 'lib/contentful/generated'
import { Box, Grid } from 'theme-ui'

type Props = SectionFragment & {
  isFixed?: boolean | undefined
  isHome?: boolean
  isAlt?: boolean
  textToTheRight?: boolean
}

const OnlyZag = ({
  title,
  subtitle,
  blocksCollection,
  isFixed,
  anchorLinkId,
  isAlt,
  textToTheRight = false
}: Props) => (
  <Box sx={{ backgroundColor: 'gray2' }}>
    {(title || subtitle || anchorLinkId) && (
      <SectionLayout
        anchorId={anchorLinkId}
        title={{ text: title }}
        subtitle={subtitle?.json}
        isZigZag
        pushSx={{
          '&>div>h1': {
            maxWidth: ['', '', '70%', '50%'],
            fontSize: ['32px', '40px', '40px', '65px'],
            lineHeight: ['40px', '40px', '40px', '67px']
          },
          '&>div:nth-of-type(1)>div>p': {
            fontSize: [14, 22]
          }
        }}
      >
        <></>
      </SectionLayout>
    )}
    <Grid>
      {blocksCollection?.items.map((item) => {
        if (item?.__typename === 'SectionBlock') {
          return (
            <SectionBlockWithIllustration
              noBackground
              key={item?.title as any}
              {...item}
              isAlt={isAlt}
              isHome={true}
              toTheRight={textToTheRight}
              stripDown={isFixed}
            />
          )
        }
        if (isDev) {
          throw new Error(`Unsupported block type, ${item?.__typename}`)
        }
        return null
      })}
    </Grid>
  </Box>
)

export default OnlyZag
