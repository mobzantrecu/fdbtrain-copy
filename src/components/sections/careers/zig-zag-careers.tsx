/** @jsx jsx */
import { Grid, jsx } from 'theme-ui'
import SectionLayout from 'components/layouts/section'
import SectionBlockWithImage from 'components/sectionBlocks/with-image'
import { isDev } from 'lib/constants'
import { SectionFragment } from 'lib/contentful/generated'

type Props = { wide?: boolean } & SectionFragment

const ZigZagCareersSection = ({
  title,
  subtitle,
  blocksCollection,
  anchorLinkId,
  wide
}: Props) => (
  <SectionLayout
    anchorId={anchorLinkId}
    title={{ text: title }}
    subtitle={subtitle?.json}
  >
    <Grid columns={1} gap={wide ? [5, null, 6] : 5}>
      {blocksCollection?.items.map((item, i) => {
        if (item?.__typename === 'SectionBlock') {
          return (
            <SectionBlockWithImage
              key={item?.title}
              {...item}
              invert={i % 2 === 1}
              wideImage={wide}
            />
          )
        }
        if (isDev) {
          throw new Error(`Unsupported block type, ${item?.__typename}`)
        }
        return null
      })}
    </Grid>
  </SectionLayout>
)

export default ZigZagCareersSection
