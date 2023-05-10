/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import SectionLayout from 'components/layouts/section'
import SectionBlockWithExternalIcon from 'components/sectionBlocks/with-external-icon'
import { isDev } from 'lib/constants'
import { SectionFragment } from 'lib/contentful/generated'

const FeaturesGridSection = ({
  blocksCollection,
  title,
  subtitle,
  anchorLinkId
}: SectionFragment) => (
  <Box sx={{ backgroundColor: 'gray2', pt: '42px' }}>
    <SectionLayout
      anchorId={anchorLinkId}
      title={{ text: title }}
      subtitle={subtitle?.json}
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
        },
        py: [30, ''],
        px: [25, '']
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          maxWidth: '1500px',
          mx: 'auto'
        }}
      >
        {blocksCollection?.items.map((item) => {
          if (item?.__typename === 'SectionBlock') {
            return <SectionBlockWithExternalIcon key={item?.title} {...item} />
          }
          if (isDev) {
            throw new Error(`Unsupported block type, ${item?.__typename}`)
          }
          return null
        })}
      </Box>
    </SectionLayout>
  </Box>
)

export default FeaturesGridSection
