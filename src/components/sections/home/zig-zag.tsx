import SectionBlockWithIllustration from 'components/sectionBlocks/with-illustration'
import { isDev } from 'lib/constants'
import { SectionFragment } from 'lib/contentful/generated'
import { Box, Grid } from 'theme-ui'
import SectionLayout from '../../layouts/section'

type Props = SectionFragment & {
  isFixed?: boolean | undefined
  isHome?: boolean
  isAlt?: boolean
}

const ZigZagSection = ({
  blocksCollection,
  isFixed,
  title,
  subtitle,
  anchorLinkId,
  isAlt
}: Props) => {
  return (
    <Box sx={{ backgroundColor: 'gray2' }}>
      {(title || subtitle) && (
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
                  key={item?.title as any}
                  {...item}
                  isAlt={isAlt}
                  toTheRight={true}
                  stripDown={true}
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
        <Grid>
          {blocksCollection?.items.map((item, i) => {
            if (item?.__typename === 'SectionBlock') {
              return (
                <SectionBlockWithIllustration
                  key={item?.title as any}
                  {...item}
                  toTheRight={isFixed ? true : i % 2 === 0}
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
}

export default ZigZagSection
