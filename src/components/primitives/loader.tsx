/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
React

import { jsx } from 'theme-ui'
import { keyframes } from '@emotion/core'
import ViewportWidthBox from 'components/layouts/viewport-width-box'

const spin = keyframes({
  '100%': { transform: 'rotate(1turn)' }
})

type Props = {
  height?: string
  bg?: string
}

const Loader: React.FC<Props> = ({ height = '100vh', bg = 'background' }) => (
  <ViewportWidthBox
    sx={{
      height,
      bg,
      zIndex: 'loader',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    <div sx={{ width: 8, color: 'primary' }}>
      <svg
        viewBox="0 0 20 20"
        sx={{ fill: 'currentColor', animation: `${spin} .5s linear infinite` }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7.229 1.173a9.25 9.25 0 1011.655 11.412 1.25 1.25 0 10-2.4-.698 6.75 6.75 0 11-8.506-8.329 1.25 1.25 0 10-.75-2.385z" />
      </svg>
    </div>
  </ViewportWidthBox>
)

export default Loader
