import CustomerCard from 'components/cards/customer'
import DevelopmentStackSlider from 'components/compound/development-stack-slider'
import SectionLayout from 'components/layouts/section'
import { CustomerFragment, SectionFragment } from 'lib/contentful/generated'
import { useMemo } from 'react'
import { Grid } from 'theme-ui'

const CustomersGridSection = ({
  title,
  subtitle,
  blocksCollection,
  logosCollection,
  anchorLinkId
}: SectionFragment) => {
  const blocks = useMemo(
    () =>
      (blocksCollection?.items.filter((b) => b?.__typename === 'Customer') ??
        []) as CustomerFragment[],
    [blocksCollection]
  )

  return (
    <SectionLayout
      anchorId={anchorLinkId}
      title={{ text: title }}
      subtitle={subtitle?.json}
      pushSx={{
        py: '65px !important',
        '@media screen and (min-width: 1250px)': {
          width: '1244px'
        },
        pb: ['50px', '50px', '50px !important']
      }}
    >
      <Grid
        variant="three"
        sx={{
          mx: 'auto',
          width: '100%',
          rowGap: 5,
          columnGap: 4
        }}
      >
        {blocks.map((item, idx) => (
          <CustomerCard key={`${item?.name}-${idx}`} {...item} />
        ))}
      </Grid>
      {logosCollection && <DevelopmentStackSlider {...logosCollection} />}
    </SectionLayout>
  )
}

export default CustomersGridSection
