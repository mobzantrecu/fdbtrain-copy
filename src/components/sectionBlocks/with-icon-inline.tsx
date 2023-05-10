/** @jsx jsx */
import { jsx, Heading, Text } from 'theme-ui'
import {
  CallToAction,
  SectionBlock,
  SectionBlockSubtitle
} from 'lib/contentful/generated'
import defaultRenderer from 'lib/contentful/renderers'
import Link from 'components/primitives/link'
import getIcon from 'lib/get-icon'
import withHighlightedText from 'lib/contentful/renderers/highlight'

type Props = Pick<SectionBlock, 'title' | 'icon' | 'additionalTitle'> & {
  subtitle?: Pick<SectionBlockSubtitle, 'json'> | null
  isLarge?: boolean
  actionsCollection?: {
    items: (Pick<CallToAction, 'children' | 'href'> | null)[]
  } | null
}

const SectionBlockWithIconInline = ({
  title,
  subtitle,
  actionsCollection,
  icon,
  isLarge,
  additionalTitle
}: Props) => {
  const Icon = getIcon(icon)
  const fontAwesomeType = 'fa-thin'
  return (
    <div
      sx={{
        color: 'gray10',
        backgroundColor: 'background',
        width: 'initial',
        maxWidth: !isLarge ? 'none' : '473px',
        display: 'flex',
        borderRadius: '4px',
        boxShadow: !isLarge ? 'card' : 'none',
        padding: !isLarge ? '30px' : 'none',
        textAlign: !isLarge ? 'left' : 'left'
      }}
    >
      <div
        sx={{
          paddingTop: '5px',
          borderRadius: 'full',
          variant: 'none',
          mt: '0px',
          color: 'iconPrimary',
          fontSize: 4,
          display: 'flex',
          alignItems: 'flex-start',
          marginRight: '18px',
          justifyContent: ['center', 'center', 'start']
        }}
      >
        {Icon && (
          <i
            className={`${fontAwesomeType} ${icon} `}
            sx={{
              fontSize: '45px',
              display: 'inline-flex',
              justifyContent: 'center',
              alignItems: 'start'
            }}
          ></i>
        )}
      </div>
      <div>
        <Heading
          as="p"
          sx={{
            color: '#6742F1',
            fontWeight: '700',
            mt: 0,
            mb: '4px'
          }}
        >
          {additionalTitle}
        </Heading>
        <Heading
          as="h1"
          variant={'heading.3'}
          sx={{
            fontWeight: '600',
            mt: 0,
            mb: '13px'
          }}
        >
          {withHighlightedText(title)}
        </Heading>
        <Text
          variant={'normal'}
          sx={{
            lineHeight: '20px',
            maxWidth: '413px',
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
            sx={{ mt: 3, fontWeight: 400, fontSize: 16 }}
            arrow
          />
        )}
      </div>
    </div>
  )
}

export default SectionBlockWithIconInline
