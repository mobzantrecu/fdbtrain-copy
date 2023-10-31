import { isDev } from 'lib/constants'
import { SectionFragment } from 'lib/contentful/generated'
import { Box, Heading } from 'theme-ui'
import SectionBlockWithTitleAndLink from '../../sectionBlocks/with-title-and-link'
import withHighlightedText from '../../../lib/contentful/renderers/highlight'

const SmallTitleAndLinkCard = ({
  blocksCollection,
  title
}: SectionFragment) => (
  <Box
    sx={
      {
        py: ['64px', null, '100px'],
        paddingBottom: [null, null, '40px'],
        height: '100%',
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        px: ['32px', '100px', '100px', '192px', '192px'],
        background: '#f9f9f9'
      } as any
    }
  >
    <Heading as="h1" variant="heading.4" sx={{ mb: '40px' }}>
      {withHighlightedText(title)}
    </Heading>
    <Box
      sx={
        {
          maxWidth: '1172px',
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: ['20px', '20px', '20px', '20px', '0px']
        } as any
      }
    >
      {blocksCollection?.items.map((item, i) => {
        if (item?.__typename === 'SectionBlock') {
          return (
            <SectionBlockWithTitleAndLink
              key={item?.title as any}
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
