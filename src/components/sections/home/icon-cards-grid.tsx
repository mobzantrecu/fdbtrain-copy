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

type Props = SectionFragment & { isHome?: boolean }

const IconCardsGridSection = ({
  title,
  subtitle,
  blocksCollection,
  logosCollection,
  anchorLinkId,
  backgroundImage,
  isHome
}: Props) => (
  <Box>
    <SectionLayout
      anchorId={anchorLinkId}
      title={{ text: title }}
      subtitle={subtitle?.json}
      noLinkIcon={isHome}
      isIconCardsGrid
      pushSx={{ backgroundColor: 'gray2' }}
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
    </SectionLayout>
    {logosCollection && (
      <Box
        sx={{
          pt: 4,
          pb: 1,
          background: `url(${backgroundImage?.url})`,
          backgroundSize: 'cover',
          height: ['400px', '400px', '694px'],
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <DevelopmentStackSlider {...logosCollection} />
      </Box>
    )}
  </Box>
)

export default IconCardsGridSection
