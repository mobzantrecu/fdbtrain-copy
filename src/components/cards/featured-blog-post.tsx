/** @jsx jsx */
import { jsx, Box, Heading, Text } from 'theme-ui'
import Link from 'components/primitives/link'
import { MediaBlockFragment } from 'lib/contentful/generated'
import ClampedText from 'components/primitives/clamped-text'
import CardImage from 'components/primitives/card-cover'
import { Description, resolveDescription } from 'lib/contentful/renderers'
import Arrow from 'components/primitives/arrow'

type Props = Omit<MediaBlockFragment, 'description'> & {
  description?: Description
  isNew?: boolean
  date?: string
  author?: React.ReactNode
  isBlog?: boolean
}

const FeaturedBlogPostCard = ({
  title,
  image,
  isNew,
  action,
  description,
  date,
  author,
  isBlog
}: Props) => {
  return (
    <Link
      href={action ? action.href : undefined}
      as={action ? 'a' : 'div'}
      variant="cards.primary"
      sx={{
        display: 'block',
        p: 0,
        boxShadow: 'cardInteractive',
        transition: 'box-shadow .2s',
        ':hover': {
          boxShadow: 'cardHover'
        }
      }}
    >
      <CardImage
        ratio={798 / 247}
        image={image}
        pushImageSx={{ objectFit: 'contain' }}
        pushSx={{
          display: 'flex',
          '@media screen and (min-width: 768px)': {
            height: isBlog ? '320px' : ''
          }
        }}
        isNew={isNew}
      />
      <Box sx={{ p: 24 }}>
        <Heading
          as="h1"
          variant="heading.base"
          sx={{
            fontSize: '32px',
            fontWeight: 600,
            lineHeight: '40px',
            '@media screen and (max-width: 425px)': {
              fontSize: '28px ',
              lineHeight: '34px'
            }
          }}
        >
          {title}
        </Heading>
        <Text sx={{ fontSize: '22px', lineHeight: '26px', maxWidth: '915px' }}>
          <ClampedText availableHeight={100}>
            {resolveDescription(description)}
          </ClampedText>
        </Text>
        {date || author ? (
          <Box sx={{ display: 'flex', m: '8px 0 24px 0', fontSize: 1 }}>
            {author && (
              <Text sx={{ mr: 1 }}>
                <b>{author} •</b>
              </Text>
            )}
            {date && <Text>{date}</Text>}
          </Box>
        ) : null}
        <Text sx={{ color: 'primary', fontWeight: '600' }}>
          Read More
          <span sx={{ display: 'inline-flex', ml: 2 }}>
            <Arrow />
          </span>
        </Text>
      </Box>
    </Link>
  )
}

export default FeaturedBlogPostCard
