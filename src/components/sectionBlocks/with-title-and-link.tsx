/** @jsx jsx */
import Link from 'components/primitives/link'
import {
  CallToAction,
  SectionBlock,
  SectionBlockSubtitle
} from 'lib/contentful/generated'
import withHighlightedText from 'lib/contentful/renderers/highlight'
import { jsx, Heading } from 'theme-ui'

type Props = Pick<SectionBlock, 'title' | 'icon'> & {
  index: number
  collectionLength: number
  subtitle?: Pick<SectionBlockSubtitle, 'json'> | null
  isLarge?: boolean
  actionsCollection?: {
    items: (Pick<CallToAction, 'children' | 'href'> | null)[]
  } | null
}

const SectionBlockWithTitleAndLink = ({
  title,
  actionsCollection,
  collectionLength,
  index
}: Props) => {
  return (
    <div
      sx={{
        color: 'gray10',
        backgroundColor: 'background',
        display: 'flex',
        flexDirection: 'column',
        padding: '30px',
        borderRadius: '4px',
        width: ['100%', '100%', '100%', '48%', '220px', '264px'],
        height: '142px',
        boxShadow: 'card',
        textAlign: 'left'
      }}
    >
      <Heading
        as="h1"
        variant={'heading.base'}
        sx={{
          width: [
            'inital',
            'inital',
            'inital',
            'inital',
            collectionLength - 1 !== index ? '100px' : 'inherit'
          ],
          fontWeight: '400',
          fontSize: ['1rem', '22px', '22px', '1.1rem', '1.1rem', '22px'],
          mt: 0,
          mb: '10px'
        }}
      >
        {withHighlightedText(title)}
      </Heading>
      {actionsCollection?.items[0] && (
        <Link
          {...actionsCollection?.items[0]}
          variant="accent"
          sx={{ fontWeight: 400, fontSize: 16 }}
          arrow
        />
      )}
    </div>
  )
}

export default SectionBlockWithTitleAndLink
