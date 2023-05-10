/** @jsx jsx */
import Link from 'components/primitives/link'
import {
  CallToAction,
  SectionBlock,
  SectionBlockSubtitle
} from 'lib/contentful/generated'
import withHighlightedText from 'lib/contentful/renderers/highlight'
import { jsx, Heading, Text } from 'theme-ui'
import defaultRenderer from '../../lib/contentful/renderers'

type Props = Pick<SectionBlock, 'title' | 'icon'> & {
  subtitle?: Pick<SectionBlockSubtitle, 'json'> | null
  actionsCollection?: {
    items: (Pick<CallToAction, 'children' | 'href'> | null)[]
  } | null
}

const SectionBlockWithPurpleTitle = ({
  title,
  actionsCollection,
  subtitle
}: Props) => {
  return (
    <div
      sx={{
        color: 'gray10',
        backgroundColor: 'background',
        display: 'flex',
        flexDirection: 'column',
        padding: ['15px', '29px', '29px', '29px', '29px', '29px'],
        borderRadius: '4px',
        width: '274px',
        textAlign: 'center',
        flex: 1,
        '@media screen and (max-width: 1163px)': {
          boxShadow: 'card',
          width: '100%',
          height: '100%'
        }
      }}
    >
      <Heading
        as="h1"
        variant={'heading.base'}
        sx={{
          fontWeight: '600',
          fontSize: ['28px', '30px', '38px', '38px', '48px', '48px'],
          mt: 0,
          mb: '10px',
          color: '#6742F1'
        }}
      >
        {withHighlightedText(title)}
      </Heading>
      <Text
        variant="normal"
        sx={{
          lineHeight: '20px',
          mb: '13px',
          '&>p': { mb: '8px' }
        }}
      >
        {defaultRenderer(subtitle?.json)}
      </Text>
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

export default SectionBlockWithPurpleTitle
