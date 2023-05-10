/** @jsx jsx */
import { jsx, Heading, Text } from 'theme-ui'
import { SectionBlockFragment } from 'lib/contentful/generated'
import defaultRenderer from 'lib/contentful/renderers'
import Link from 'components/primitives/link'
import withHighlightedText from 'lib/contentful/renderers/highlight'
import CardImage from 'components/primitives/card-cover'

type Props = SectionBlockFragment

const SectionBlockWithExternalIcon = ({
  title,
  subtitle,
  actionsCollection,
  media
}: Props) => {
  const withImage = !!media?.url
  return (
    <div
      sx={{
        borderRadius: '8px',
        boxShadow: 'card',
        backgroundColor: 'background',
        padding: '20px 38px',
        margin: ['25px 0px', '30px 17px'],
        width: '365px',
        minHeight: '260px',
        color: 'gray10'
      }}
    >
      <div sx={{ mt: '25px', width: '48px', height: '48px' }}>
        {withImage ? <CardImage image={media} ratio={1} /> : null}
      </div>
      <Heading
        as="h1"
        variant="heading.base"
        sx={{ mb: '7px', mt: 22, fontWeight: '600' }}
      >
        {withHighlightedText(title)}
      </Heading>
      <Text variant="small" sx={{ lineHeight: '20px' }}>
        {defaultRenderer(subtitle?.json)}
      </Text>
      {actionsCollection?.items[0] && (
        <Link
          {...actionsCollection?.items[0]}
          variant="accent"
          sx={{ mt: 3 }}
          arrow
        />
      )}
    </div>
  )
}

export default SectionBlockWithExternalIcon
