/** @jsx jsx */
import { Box, Grid, jsx } from 'theme-ui'
import SectionLayout from 'components/layouts/section'
import Link from 'components/primitives/link'
import { SectionBlockFragment, SectionFragment } from 'lib/contentful/generated'
import BigCard from 'components/cards/big'

const TwoBigCardsSection = ({
  title,
  subtitle,
  actionsCollection,
  blocksCollection,
  anchorLinkId,
  backgroundImage
}: SectionFragment) => {
  const blocks = (blocksCollection?.items.filter(
    (b) => b?.__typename === 'SectionBlock'
  ) ?? []) as SectionBlockFragment[]

  return (
    <SectionLayout
      backgroundImageColor={backgroundImage?.title}
      anchorId={anchorLinkId}
      title={{ text: title }}
      subtitle={subtitle?.json}
      pushSx={{
        background: `url(${backgroundImage?.url})`,
        backgroundSize: 'cover',
        backgroundColor: 'gray2',
        height: ['1000px', '1000px', '947px', '947px', '947px'],
        '@media screen and (max-width: 575px)': {
          height: '1050px'
        },
        '@media screen and (max-width: 415px)': {
          height: '1100px'
        },
        '@media screen and (max-width: 330px)': {
          height: '1175px'
        },
        '@media screen and (min-width: 1600px)': {
          height: '60vw'
        },
        '@media screen and (min-width: 1860px)': {
          pt: '9vw'
        },
        color: 'background'
      }}
      headingContainerPushSx={{
        mt: 6,
        mb: 30,
        '&>h2': {
          '@media screen and (max-width: 680px)': {
            fontSize: '40px'
          }
        },
        '&>div': {
          '@media screen and (max-width: 680px)': {
            fontSize: '19px',
            lineHeight: '24px'
          }
        }
      }}
      largeWidth
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mx: ['0', '0', '50px', '50px', '150px']
        }}
      >
        <Grid
          columns={[1, null, 2]}
          gap={[0, 0, null, 0]}
          sx={{ alignItems: 'center' }}
        >
          {blocks.map((block, i) => (
            <BigCard {...block} key={`${block.title}-${i}`} />
          ))}
        </Grid>
      </Box>
      {actionsCollection?.items[0] && (
        <Link
          sx={{ display: 'block', mt: 4 }}
          variant="accent"
          arrow
          backgroundImageColor={backgroundImage?.title}
          {...actionsCollection?.items[0]}
        />
      )}
    </SectionLayout>
  )
}

export default TwoBigCardsSection
