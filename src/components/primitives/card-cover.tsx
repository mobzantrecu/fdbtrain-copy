/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
React

import { Box, jsx, SxStyleProp } from 'theme-ui'
import { MediaFragment } from 'lib/contentful/generated'
import NextImageMedia from './next-image-media'

type Props = Omit<MediaFragment, 'height'> & {
  icon?: React.ReactNode
  pushImageSx?: SxStyleProp
  pushSx?: SxStyleProp
  isNew?: boolean
  ratio: number
  width?: number
  image:
    | React.ComponentPropsWithoutRef<typeof NextImageMedia>
    | undefined
    | null
}

const CardCover = ({
  icon,
  ratio,
  pushSx,
  pushImageSx,
  isNew,
  image,
  width
}: Props) => {
  width = width || image?.width || 4000
  const height = width / ratio

  return (
    <Box
      sx={
        {
          img: {
            objectFit: 'cover',
            ...pushImageSx
          },
          position: 'relative',
          ...pushSx
        } as any
      }
    >
      <NextImageMedia
        {...image}
        url={image?.url || '/images/backgrounds/default-blog-post-header.svg'}
        height={height}
        width={width}
      />
      {icon && (
        <i
          sx={{
            borderRadius: 'full',
            height: '48px',
            width: '48px',
            fontSize: 4,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'primary',
            fill: 'primary',
            background: 'rgba(255,255,255,.75)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform .15s'
          }}
        >
          {icon}
        </i>
      )}
      {isNew && (
        <div
          sx={{
            color: 'sage8',
            backgroundColor: 'sage2',
            borderRadius: '8px',
            height: '24px',
            width: '42px',
            fontSize: '12px',
            position: 'absolute',
            top: 3,
            left: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'normal'
          }}
        >
          NEW
        </div>
      )}
    </Box>
  )
}

export default CardCover
