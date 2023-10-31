import SectionBlockWithIllustration from 'components/sectionBlocks/with-illustration'
import { isDev } from 'lib/constants'
import { SectionFragment } from 'lib/contentful/generated'
import { Box, Grid } from 'theme-ui'

type Props = SectionFragment & {
  isFixed?: boolean | undefined
  isHome?: boolean
  isAlt?: boolean
}

const ZigZagNoBackgroundSection = ({
  blocksCollection,
  isFixed,
  isAlt
}: Props) => (
  <Box sx={{ backgroundColor: 'gray2' }}>
    {isFixed ? (
      <Box
        sx={
          {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            mx: 'auto',
            maxWidth: '1400px',
            px: 4,
            pb: 5
          } as any
        }
      >
        {blocksCollection?.items.map((item) => {
          if (item?.__typename === 'SectionBlock') {
            return (
              <SectionBlockWithIllustration
                noBackground
                key={item?.title as any}
                {...item}
                toTheRight={true}
                stripDown={true}
                isAlt={isAlt}
              />
            )
          }
          if (isDev) {
            throw new Error(`Unsupported block type, ${item?.__typename}`)
          }
          return null
        })}
      </Box>
    ) : (
      <Grid sx={isAlt ? { paddingBottom: '130px' } : {}}>
        {blocksCollection?.items.map((item, i) => {
          if (item?.__typename === 'SectionBlock') {
            return (
              <SectionBlockWithIllustration
                noBackground
                key={item?.title as any}
                {...item}
                toTheRight={isFixed ? true : isAlt ? i % 2 !== 0 : i % 2 === 0}
                isHome={true}
                isAlt={isAlt}
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
    )}
  </Box>
)

export default ZigZagNoBackgroundSection
