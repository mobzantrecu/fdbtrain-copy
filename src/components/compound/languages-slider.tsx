/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
React

import { jsx, SxStyleProp } from 'theme-ui'
import Slider from 'components/primitives/slider'
import { LogosCollectionFragment } from 'lib/contentful/generated'
import Logo from 'components/primitives/logo'

type Props = LogosCollectionFragment & {
  pushSx?: SxStyleProp
}

const sx: SxStyleProp = {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  '&>img': { maxWidth: 'fit-content', width: 'fit-content' }
}
const LanguagesSlider = ({ logosCollection, pushSx }: Props) => (
  <div sx={pushSx}>
    <div
      sx={{
        display: ['none', null, null, 'flex'],
        justifyContent: 'center',
        alignItems: 'center',
        mx: 'auto',
        flexWrap: 'wrap'
      }}
    >
      {logosCollection?.items.map((c) => (
        <Logo
          key={c?.name as any}
          {...c}
          pushSx={{
            ...sx,
            flexWrap: 'wrap',
            p: '20px 20px',
            maxHeight: '100px',
            alignContent: 'center',
            maxWidth: '232px'
          }}
        />
      ))}
    </div>
    <Slider pushSx={{ display: ['block', null, null, 'none'] }} duration={1.5}>
      {logosCollection?.items.map((c) => (
        <Logo
          key={c?.name as any}
          {...c}
          pushSx={{
            ...sx,
            height: '82px',
            width: '100px',
            p: '15px 25px'
          }}
        />
      ))}
    </Slider>
  </div>
)

export default LanguagesSlider
