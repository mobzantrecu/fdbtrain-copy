/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
React

import { jsx, SxStyleProp } from 'theme-ui'
import { keyframes } from '@emotion/core'
import { Children } from 'react'
import { isDev } from 'lib/constants'

const slide = keyframes`
from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(-50%, 0, 0);
  }
`

type Props = {
  duration?: number
  pushSx?: SxStyleProp
  pushItemSx?: SxStyleProp
  isFullScreen?: boolean
  numberOfCopies?: number
  left?: boolean
}

const Slider: React.FC<Props> = ({
  duration = 3,
  children,
  pushSx,
  pushItemSx,
  isFullScreen = true,
  numberOfCopies = 2,
  left
}) => {
  if (numberOfCopies % 2 !== 0 && isDev) {
    throw new Error('numberOfCopies must be even')
  }

  const length = Children.count(children)
  const adaptedDuration = duration * length * numberOfCopies

  return (
    <div
      sx={{
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        position: 'relative',
        width: isFullScreen ? 'calc(var(--vw, 1vw) * 100)' : '100%',
        left: isFullScreen ? '50%' : '0',
        transform: isFullScreen ? 'translateX(-50%)' : '0',
        ...pushSx
      }}
    >
      <div
        sx={{
          display: 'inline-block',
          whiteSpace: 'nowrap',
          animation: `${slide} ${adaptedDuration}s linear infinite`,
          animationDirection: left ? 'reverse' : 'normal'
        }}
      >
        {Array.from({ length: numberOfCopies }, (_, i) => i + 1).map((n) => (
          <div
            key={`auto-slider-copy-${n}`}
            sx={{
              display: 'inline-flex',
              '& > div': { display: 'inline-block' },
              ...pushItemSx
            }}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Slider
