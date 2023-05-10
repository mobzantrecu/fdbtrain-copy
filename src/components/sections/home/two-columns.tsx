import { isDev } from 'lib/constants'
import { SectionFragment } from 'lib/contentful/generated'
import { Box, Grid } from 'theme-ui'
import SectionBlockOnlyText from '../../sectionBlocks/with-seccond-text'

const TwoColumnsSection = ({ blocksCollection }: SectionFragment) => (
  <Box
    sx={{
      backgroundColor: '#1f1244',
      minHeight: '430px',
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    <Grid
      columns={['1fr', null, 'repeat(2, fit-content(50%))']}
      gap={[3, 4, 5, '85px']}
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
          return <SectionBlockOnlyText key={item?.title} {...item} />
        }
        if (isDev) {
          throw new Error(`Unsupported block type, ${item?.__typename}`)
        }
        return null
      })}
    </Grid>
  </Box>
)

export default TwoColumnsSection
