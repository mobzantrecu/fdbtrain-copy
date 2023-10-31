import DevelopmentStackSlider from 'components/compound/development-stack-slider'
import SectionLayout from 'components/layouts/section'
import SectionBlockWithIcon from 'components/sectionBlocks/with-icon'
import { isDev } from 'lib/constants'
import { SectionFragment } from 'lib/contentful/generated'
import { Box, SxStyleProp } from 'theme-ui'

const sxFlex: SxStyleProp = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  maxWidth: '1300px',
  mx: 'auto'
}

const sxGrid: SxStyleProp = {
  display: 'grid',
  gridTemplateColumns: ['1fr', null, 'auto auto'],
  columnGap: '24px',
  rowGap: '24px',
  justifyContent: 'center',
  justifyItems: 'center',
  maxWidth: '1300px',
  mx: 'auto',
  '&>div': {
    margin: '0px'
  }
}

const IconCardsGridLogosSection = ({
  title,
  subtitle,
  blocksCollection,
  logosCollection,
  anchorLinkId,
  backgroundImage
}: SectionFragment) => (
  <Box
    sx={{
      backgroundImage: `url(${backgroundImage?.url})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundColor: 'gray2',
      py: backgroundImage?.title?.includes('periwinkle') ? '230px' : '',
      '@media screen and (min-width: 1720px)': {
        py: backgroundImage?.title?.includes('periwinkle') ? '320px' : ''
      },
      '&>div': {
        scrollMarginTop: '6rem'
      }
    }}
  >
    <SectionLayout
      anchorId={anchorLinkId}
      title={{ text: title }}
      subtitle={subtitle?.json}
      isIconCardsGrid
      headingContainerPushSx={{
        '&>h2': {
          '@media screen and (max-width: 680px)': {
            mt: 4
          }
        },
        color: backgroundImage?.title?.includes('blue') ? 'gray1' : 'gray10'
      }}
    >
      <Box
        sx={blocksCollection?.items.length == 4 ? { ...sxGrid } : { ...sxFlex }}
      >
        {blocksCollection?.items.map((item) => {
          if (item?.__typename === 'SectionBlock') {
            return <SectionBlockWithIcon key={item?.title as any} {...item} />
          }
          if (isDev) {
            throw new Error(`Unsupported block type, ${item?.__typename}`)
          }
          return null
        })}
      </Box>
      <Box sx={{ mt: 4 }}>
        <DevelopmentStackSlider {...logosCollection} />
      </Box>
    </SectionLayout>
  </Box>
)

export default IconCardsGridLogosSection
