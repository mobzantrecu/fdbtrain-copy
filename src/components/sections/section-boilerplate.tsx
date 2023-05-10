import SectionLayout from 'components/layouts/section'
import { SectionBlockFragment, SectionFragment } from 'lib/contentful/generated'

const SectionName = ({
  title,
  subtitle,
  blocksCollection
}: SectionFragment) => {
  const blocks = (blocksCollection?.items.filter(
    (b) => b?.__typename === 'SectionBlock'
  ) ?? []) as SectionBlockFragment[]

  return (
    <SectionLayout title={{ text: title }} subtitle={subtitle?.json}>
      <div>{blocks.toString()}</div>
    </SectionLayout>
  )
}

export default SectionName
