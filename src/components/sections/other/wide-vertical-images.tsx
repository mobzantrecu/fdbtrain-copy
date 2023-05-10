/** @jsx jsx */
import { Grid, jsx } from 'theme-ui'
import SectionLayout from 'components/layouts/section'
import { isDev } from 'lib/constants'
import { SectionFragment } from 'lib/contentful/generated'
import WideSectionBlockWithImage from 'components/sectionBlocks/wide-with-image'

const WideVerticalImagesSection = ({
  title,
  subtitle,
  blocksCollection,
  anchorLinkId
}: SectionFragment) => (
  <SectionLayout
    anchorId={anchorLinkId}
    title={{ text: title }}
    subtitle={subtitle?.json}
  >
    <Grid columns={1} gap={5}>
      {blocksCollection?.items.map((item) => {
        if (item?.__typename === 'SectionBlock') {
          return <WideSectionBlockWithImage key={item?.title} {...item} />
        }
        if (isDev) {
          throw new Error(`Unsupported block type, ${item?.__typename}`)
        }
        return null
      })}
    </Grid>
  </SectionLayout>
)

export default WideVerticalImagesSection
