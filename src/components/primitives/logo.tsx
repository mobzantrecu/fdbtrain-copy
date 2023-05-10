/** @jsx jsx */
import { Box, jsx, SxStyleProp } from 'theme-ui'
import { LogoFragment } from 'lib/contentful/generated'
import Link from 'components/primitives/link'
import Image from 'next/image'

type Props = LogoFragment & { pushSx?: SxStyleProp }

const Logo = ({ name, image, action, pushSx }: Props) => {
  if (action) {
    return (
      <Link {...action} sx={pushSx}>
        <span sx={{ position: 'relative', width: '100%', height: '100%' }}>
          <Image
            src={image?.url ?? ''}
            alt={`${name} Image`}
            layout="fill"
            objectFit="contain"
            loading="eager"
            sizes="(max-width: 640px) 90vw, (max-width: 1200px) 50vw, 30vw"
          />
        </span>
      </Link>
    )
  }
  return (
    <Box sx={{ ...pushSx, display: 'flex' }}>
      <span
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
          display: 'inline-block'
        }}
      >
        <Image
          src={image?.url ?? ''}
          alt={`${name} Image`}
          layout="fill"
          objectFit="contain"
          loading="eager"
          sizes="(max-width: 640px) 90vw, (max-width: 1200px) 50vw, 30vw"
        />
      </span>
    </Box>
  )
}

export default Logo
