import CaseStudyCard from 'components/cards/case-study'
import KeenSliderGrid from 'components/layouts/keen-slider-grid'
import SectionLayout from 'components/layouts/section'
// import Link from 'components/primitives/link'
import { isDev } from 'lib/constants'
import { SectionFragment } from 'lib/contentful/generated'
import Image from 'next/image'
import { Box } from 'theme-ui'

type Props = { isHome?: boolean } & SectionFragment

const CaseStudiesSection = ({
  title,
  subtitle,
  blocksCollection,
  isHome = false,
  // actionsCollection,
  anchorLinkId,
  backgroundImage
}: Props) => {
  const backgroundUrl =
    isHome || !backgroundImage?.url
      ? '/images/backgrounds/case-studies-background.png'
      : backgroundImage?.url

  const imgStyle = {
    '& div': {
      height: '66% !important',
      '& img': {
        objectFit: 'fill !important'
      }
    }
  } as any

  return (
    <Box
      sx={{
        position: 'relative',
        overflowX: 'hidden',
        backgroundColor: 'gray2',
        mb: title === 'Why Fauna?' ? '100px' : null,
        py: '0px',
        pb: '30px',
        '@media screen and (min-width: 1720px)': {
          py: 'px'
        }
      }}
    >
      <Box sx={isHome && imgStyle}>
        <Image
          src={backgroundUrl as any}
          layout="fill"
          quality={100}
          objectFit="cover"
          objectPosition="center"
        />
      </Box>

      <SectionLayout
        anchorId={anchorLinkId}
        title={{ text: title }}
        subtitle={subtitle?.json}
        pushSx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pb: ['0px', '0px', '0px'],
          '@media screen and (min-width: 1921px)': {
            pt: '0px !important',
            py: '0px',
            my: '0px'
          }
        }}
        noContentDivider
        headingContainerPushSx={{
          marginBottom: 0
        }}
      >
        {/* Delete on contentful */}
        {/* {actionsCollection?.items.map((item) => (
        <Link
          key={item?.children}
          {...item}
          variant="accent"
          sx={{ ':not(:last-of-type)': { mr: 3 } }}
          arrow
        />
      ))} */}
        <KeenSliderGrid
          slidesPerView={[1, 1, 1.41]}
          config={{ centered: true, spacing: 60, initial: 0 }}
          pushSx={{ pt: [4, null, 40] }}
          withArrowControls
        >
          {blocksCollection?.items.map((item, i) => {
            if (item?.__typename === 'Quote2') {
              return (
                <CaseStudyCard
                  isInSlider
                  key={`${item?.quote}-${i}`}
                  {...item}
                />
              )
            }
            if (isDev) {
              throw new Error(`Unsupported block type, ${item?.__typename}`)
            }
            return null
          })}
        </KeenSliderGrid>
      </SectionLayout>
    </Box>
  )
}

export default CaseStudiesSection
