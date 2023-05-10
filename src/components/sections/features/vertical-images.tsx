/** @jsx jsx */
import { Flex, Grid, jsx } from 'theme-ui'
import SectionLayout from 'components/layouts/section'
import SectionBlockWithImage from 'components/sectionBlocks/with-image'
import { isDev } from 'lib/constants'
import { SectionFragment } from 'lib/contentful/generated'
import Link from 'components/primitives/link'

const VerticalImagesSection = ({
  title,
  subtitle,
  blocksCollection,
  anchorLinkId,
  actionsCollection
}: SectionFragment) => (
  <SectionLayout
    anchorId={anchorLinkId}
    title={{ text: title }}
    subtitle={subtitle?.json}
    smallContainer
  >
    <Grid columns={1} gap={5}>
      {blocksCollection?.items.map((item) => {
        if (item?.__typename === 'SectionBlock') {
          return <SectionBlockWithImage key={item?.title} {...item} />
        }
        if (isDev) {
          throw new Error(`Unsupported block type, ${item?.__typename}`)
        }
        return null
      })}
    </Grid>
    <Flex sx={{ justifyContent: 'flex-end', mt: 4 }}>
      {actionsCollection?.items.map((action) => (
        <Link
          {...action}
          key={action?.href}
          sx={{ ':not(:last-of-type)': { mr: 3 } }}
          variant="accent"
          arrow
        />
      ))}
    </Flex>
  </SectionLayout>
)

export default VerticalImagesSection
