/** @jsx jsx */
import { jsx, Embed, Box } from 'theme-ui'
import Portal from 'components/primitives/portal'
import { useEffect, useMemo } from 'react'
import { FiX } from 'react-icons/fi'
import { usePreventScroll } from 'react-aria'

type Props = {
  url: string | undefined
  handleClose: () => void
}

const YouTubeVideoPopUp = ({ url, handleClose }: Props) => {
  usePreventScroll()

  useEffect(() => {
    function keyPress(e: any) {
      if (e.key === 'Escape') {
        handleClose()
      }
    }
    document.addEventListener('keydown', keyPress)
    return () => document.removeEventListener('keydown', keyPress)
  }, [handleClose])

  const parsedUrl = useMemo(() => {
    if (!url) return null
    let videoId: string | undefined = undefined
    if (url.includes('youtu.be')) {
      videoId = url.split('.be/')[1]
    } else {
      videoId = url.split('v=')[1]
      videoId = videoId.split('&')[0]
    }

    return `https://www.youtube.com/embed/${videoId}`
  }, [url])

  if (!parsedUrl) return null
  return (
    <Portal>
      <div
        className="container"
        onClick={handleClose}
        sx={{
          width: '100vw',
          height: '100vh',
          position: 'fixed',
          top: '0',
          left: '0',
          background: 'rgba(0, 0, 0, 0.6)',
          zIndex: 'modal'
        }}
      >
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            width: '100%',
            height: '100%',
            justifyContent: 'center'
          }}
        >
          <button
            aria-label="close youtube popup"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: '20px',
              right: '30px',
              cursor: 'pointer',
              outline: 'none',
              color: 'background'
            }}
          >
            <FiX size={27} />
          </button>
          <Box
            sx={{
              display: 'flex',
              height: ['270px', '320px', '350px', '400px'],
              width: ['90%', '550px', '700px', '800px'],
              alignSelf: 'center'
            }}
          >
            <Embed src={parsedUrl} />
          </Box>
        </Box>
      </div>
    </Portal>
  )
}

export default YouTubeVideoPopUp
