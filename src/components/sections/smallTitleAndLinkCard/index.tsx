import { isDev } from 'lib/constants'
import { SectionFragment } from 'lib/contentful/generated'
import { Box } from 'theme-ui'
import SectionBlockWithTitleAndLink from '../../sectionBlocks/with-title-and-link'

const SmallTitleAndLinkCard = ({ blocksCollection }: SectionFragment) => (
  <Box
    sx={{
      py: 3,
      height: '100%',
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      textAlign: 'center',
      px: ['32px', '100px', '100px', '192px', '192px'],
      background: '#f9f9f9'
    }}
  >
    <Box
      sx={{
        maxWidth: '1172px',
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: ['20px', '20px', '20px', '20px', '0px']
      }}
    >
      {blocksCollection?.items.map((item, i) => {
        if (item?.__typename === 'SectionBlock') {
          return (
            <SectionBlockWithTitleAndLink
              key={item?.title}
              {...item}
              collectionLength={blocksCollection?.items.length}
              index={i}
            />
          )
        }
        if (isDev) {
          throw new Error(`Unsupported block type, ${item?.__typename}`)
        }
        return null
      })}
    </Box>
  </Box>
)

export default SmallTitleAndLinkCard
