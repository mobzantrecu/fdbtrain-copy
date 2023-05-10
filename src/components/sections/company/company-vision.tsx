import ApplicationsComparisonCard from 'components/cards/applications-comparison'
import SectionLayout from 'components/layouts/section'
import { isDev } from 'lib/constants'
import { SectionFragment } from 'lib/contentful/generated'
import defaultRenderer from 'lib/contentful/renderers'
import { Box, Grid } from 'theme-ui'

const CompanyVisionSection = ({
  title,
  subtitle,
  blocksCollection,
  anchorLinkId
}: SectionFragment) => {
  const block = blocksCollection?.items[0]
  if (block?.__typename !== 'ListBlock') {
    if (isDev) {
      throw new Error(
        `Block has to be of type ListBlock, ${JSON.stringify(block, null, 2)}`
      )
    }
    return null
  }
  return (
    <SectionLayout anchorId={anchorLinkId} title={{ text: title }}>
      <Grid sx={{ alignItems: 'center' }} variant="two">
        <ApplicationsComparisonCard blocks={[{ ...block, isPositive: true }]} />
        <Box sx={{ variant: 'text.small', p: { mb: 24 } }}>
          {defaultRenderer(subtitle?.json)}
        </Box>
      </Grid>
    </SectionLayout>
  )
}

export default CompanyVisionSection
