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

type Props = Pick<SectionBlock, 'title' | 'icon'> & {
  subtitle?: Pick<SectionBlockSubtitle, 'json'> | null
  isLarge?: boolean
  actionsCollection?: {
    items: (Pick<CallToAction, 'children' | 'href'> | null)[]
  } | null
}

const SectionBlockWithIcon = ({
  title,
  subtitle,
  actionsCollection,
  icon,
  isLarge
}: Props) => {
  const Icon = getIcon(icon)
  const fontAwesomeType = isLarge ? 'fa-thin' : 'fa-light'
  return (
    <div
      sx={{
        color: 'gray10',
        borderRadius: isLarge ? '4px' : '8px',
        boxShadow: 'card',
        backgroundColor: 'background',
        padding: isLarge ? '30px 38px' : '20px 38px',
        margin: isLarge ? '0px' : '30px 17px',
        width: isLarge ? 'initial' : ['320px', '365px'],
        minHeight: isLarge ? '291px' : 'initial',
        maxWidth: isLarge ? '473px' : 'initial'
      }}
    >
      <div
        sx={{
          borderRadius: 'full',
          variant: isLarge ? 'none' : 'gradients.circleSoft',
          mt: isLarge ? '0px' : '25px',
          width: isLarge ? 'initial' : '48px',
          height: isLarge ? 'initial' : '48px',
          color: 'iconPrimary',
          fontSize: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: isLarge ? ['center', 'center', 'start'] : 'center'
        }}
      >
        {Icon && (
          <i
            className={`${fontAwesomeType} ${icon} `}
            sx={{
              fontSize: isLarge ? '60px' : '20px',
              display: 'inline-flex',
              justifyContent: 'center',
              alignItems: 'start'
            }}
          ></i>
        )}
      </div>
      <Heading
        as="h1"
        variant={isLarge ? 'heading.3' : 'heading.base'}
        sx={{
          mb: '7px',
          mt: isLarge ? 10 : 22,
          fontWeight: '600'
        }}
      >
        {withHighlightedText(title)}
      </Heading>
      <Text
        variant={isLarge ? 'normal' : 'small'}
        sx={{ lineHeight: '20px', '&>p': { mb: '8px' }, mt: isLarge ? 20 : 0 }}
      >
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

export default SectionBlockWithIcon
