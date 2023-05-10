import MarkdownBody from 'components/compound/markdown-body'
import SectionLayout from 'components/layouts/section'
import { isDev } from 'lib/constants'
import { MarkdownBodyFragment, SectionFragment } from 'lib/contentful/generated'
import { Container } from 'theme-ui'

const MarkdownBodySection = ({
  title,
  subtitle,
  blocksCollection,
  anchorLinkId,
  compactMode
}: SectionFragment) => {
  const block = blocksCollection?.items.find(
    (b) => b?.__typename === 'MarkdownBody'
  ) as MarkdownBodyFragment | undefined

  if (!block && isDev) {
    throw new Error(`Body not found.`)
  }
  return (
    <SectionLayout
      anchorId={anchorLinkId}
      title={{ text: title }}
      subtitle={subtitle?.json}
      headingContainerPushSx={{ margin: compactMode ? 0 : '' }}
      noContentDivider
    >
      <Container
        variant="blogPost"
        sx={{ p: 0 }}
        pt={compactMode ? '' : ['64px', null, '80px']}
      >
        <MarkdownBody source={block?.body ?? ''} />
      </Container>
    </SectionLayout>
  )
}

export default MarkdownBodySection
