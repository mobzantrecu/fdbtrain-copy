/** @jsx jsx */
import { jsx, Heading, Text, Flex } from 'theme-ui'
import { SectionBlockFragment } from 'lib/contentful/generated'
import defaultRenderer from 'lib/contentful/renderers'
import Link from 'components/primitives/link'
import withHighlightedText from 'lib/contentful/renderers/highlight'
import AspectRatio from 'components/primitives/aspect-ratio'

type Props = SectionBlockFragment & { invert?: boolean; wideImage?: boolean }

const SectionBlockWithImage = ({
  title,
  subtitle,
  media,
  actionsCollection,
  invert,
  wideImage
}: Props) => (
  <Flex
    sx={{
      width: ['100%', null, 'fit-content'],
      mx: 'auto',
      alignItems: ['flex-start', null, 'center'],
      flexDirection: ['column', null, invert ? 'row-reverse' : 'row']
    }}
  >
    <div
      sx={{
        marginLeft: !invert ? undefined : [0, null, 5],
        marginRight: invert ? undefined : [0, null, 5],
        marginBottom: [4, null, 0],
        height: '100%',
        maxHeight: '450px',
        width: ['100%', null, wideImage ? '685px' : '560px']
      }}
    >
      <AspectRatio
        ratio={wideImage ? 685 / 278 : 497 / 300}
        pushSx={{ overflow: 'visible' }}
      >
        <div
          sx={{
            height: '100%',
            width: '100%',
            variant: 'gradients.soft',
            border: '1px solid',
            borderColor: 'border',
            boxShadow: 'cardNew',
            borderRadius: 'md',
            overflow: 'hidden',
            zIndex: '1',
            position: 'relative'
          }}
        >
          <img
            src={media?.url ?? ''}
            alt={media?.title ?? ''}
            sx={{ objectFit: 'cover', width: '100%', height: '100%' }}
          />
        </div>
      </AspectRatio>
    </div>
    <div sx={{ maxWidth: '520px' }}>
      <Heading as="h1" variant="heading.3" sx={{ mb: 3, fontWeight: 600 }}>
        {withHighlightedText(title)}
      </Heading>
      <Text variant="small" sx={{ mb: 3, 'p:not(:last-of-type)': { mb: 3 } }}>
        {defaultRenderer(subtitle?.json)}
      </Text>
      {actionsCollection?.items.map((action) => (
        <Link
          {...action}
          key={action?.href}
          sx={{ ':not(:last-of-type)': { mr: 3 } }}
          variant="accent"
          arrow
        />
      ))}
    </div>
  </Flex>
)

export default SectionBlockWithImage
