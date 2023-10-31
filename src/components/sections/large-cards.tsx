import { isDev } from 'lib/constants'
import { SectionFragment } from 'lib/contentful/generated'
import { Box, Grid, Heading } from 'theme-ui'
import withHighlightedText from '../../lib/contentful/renderers/highlight'
import SectionBlockWithIcon from '../sectionBlocks/with-icon'

const LargeCardsSection = ({ blocksCollection, title }: SectionFragment) => (
  <Box
    sx={
      {
        minHeight: '430px',
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        py: ['64px', null, '80px']
      } as any
    }
  >
    <Heading as="h1" variant="heading.4" sx={{ mb: '40px' }}>
      {withHighlightedText(title)}
    </Heading>
    <Grid
      columns={['1fr', null, 'repeat(2, fit-content(50%))']}
      gap="26px"
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        justifyItems: 'center',
        px: ['30px', '100px', null, '192px'],
        pb: ['36px', '36px', '0px', null],
        textAlign: ['center', null, 'left']
      }}
    >
      {blocksCollection?.items.map((item) => {
        if (item?.__typename === 'SectionBlock') {
          return (
            <SectionBlockWithIcon key={item?.title as any} {...item} isLarge />
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

export default LargeCardsSection
