/** @jsx jsx */
import { jsx, Box, Heading, Text } from 'theme-ui'
import Link from 'components/primitives/link'
import { MediaBlockFragment } from 'lib/contentful/generated'
import { Description, resolveDescription } from 'lib/contentful/renderers'
import { FiPlay, FiRadio, FiCode, FiPieChart, FiBookOpen } from 'react-icons/fi'
import { IconType } from 'react-icons'
import { useCallback, useState } from 'react'
import YouTubeVideoPopUp from 'components/compound/youtube-video-popup'
import CardCover from 'components/primitives/card-cover'
import Arrow from 'components/primitives/arrow'

type Props = Omit<MediaBlockFragment, 'description'> & {
  description?: Description
  isNew?: boolean
  date?: string
  author?: React.ReactNode
}

const MediaCard = ({
  title,
  image,
  action,
  description,
  type,
  isNew,
  date,
  author
}: Props) => {
  const [openVideoPopup, setOpenVideoPopup] = useState(false)
  let isYoutubeVideo = false

  let Icon: IconType | undefined
  switch (type) {
    case 'Video':
      Icon = FiPlay
      isYoutubeVideo = !!action?.href?.includes('youtu')
      break
    case 'Podcast':
      Icon = FiRadio
      break
    case 'Documentation':
      Icon = FiCode
      break
    case 'Report':
      Icon = FiPieChart
      break
    case 'Article':
      Icon = FiBookOpen
      break
    default:
      break
  }

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (isYoutubeVideo) {
        e.preventDefault()
        setOpenVideoPopup(true)
      }
    },
    [isYoutubeVideo]
  )

  const resolvedDescription = resolveDescription(description)

  return (
    <>
      <Link
        href={action ? action.href : undefined}
        as={action ? 'a' : 'div'}
        onClick={handleClick}
        variant="cards.primary"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          p: 0,
          boxShadow: 'cardInteractive',
          '&:hover': action
            ? {
                boxShadow: 'cardHover'
              }
            : undefined,
          whiteSpace: 'normal'
        }}
      >
        <div>
          {Icon ? (
            <div
              sx={{
                mx: '24px',
                my: '24px',
                background:
                  'linear-gradient(45deg, #F2F2FF 63.26%, rgba(255, 255, 255, 0) 100%)',
                width: '48px',
                borderRadius: '50%'
              }}
            >
              <Icon
                sx={{
                  color: 'primary',
                  width: '48px',
                  height: '48px',
                  p: '12px'
                }}
              />
            </div>
          ) : (
            <div sx={{ mx: date ? 0 : 3, mt: date ? 0 : 3, mb: 1 }}>
              <CardCover image={image} ratio={16 / 8} isNew={isNew} />
            </div>
          )}
          <Box sx={{ p: date ? 15 : 24, pb: 0, pt: date ? 15 : 0 }}>
            <Heading
              as="h1"
              variant="heading.base"
              sx={{
                fontSize: '18px',
                fontWeight: '600',
                lineHeight: '18px',
                pl: '.5px'
              }}
            >
              {title}
            </Heading>
            {date || author ? (
              <Box
                sx={{
                  display: 'flex',
                  mb: date ? '5px' : 3,
                  fontSize: 1,
                  mt: date ? 2 : ''
                }}
              >
                {author && (
                  <Text sx={{ mr: 1 }}>
                    <b>{author} •</b>
                  </Text>
                )}
                {date && <Text>{date}</Text>}
              </Box>
            ) : null}
            {description && (
              <Text
                sx={{ m: '8px 0 16px 0', lineHeight: '20px' }}
                variant="small"
              >
                {resolvedDescription}
              </Text>
            )}
          </Box>
        </div>
        {action && (
          <>
            <Text
              sx={{
                color: 'primary',
                p: date ? '0 24px 18px 15px' : '0 24px 24px 24px',
                fontWeight: '600'
              }}
            >
              {action.children}
              <span sx={{ display: 'inline-flex', ml: 2 }}>
                <Arrow />
              </span>
            </Text>
          </>
        )}
      </Link>
      {openVideoPopup && isYoutubeVideo && (
        <YouTubeVideoPopUp
          url={action?.href ?? ''}
          handleClose={() => setOpenVideoPopup(false)}
        />
      )}
    </>
  )
}

export default MediaCard
