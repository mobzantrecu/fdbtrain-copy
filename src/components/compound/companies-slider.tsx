/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
React

import { jsx, SxStyleProp, Text } from 'theme-ui'
import Logo from 'components/primitives/logo'
import { LogosCollectionFragment } from 'lib/contentful/generated'
import Slider from '../primitives/slider'
import withHighlightedText from 'lib/contentful/renderers/highlight'
import Link from 'components/primitives/link'

const sx: SxStyleProp = {
  display: 'inline-flex',
  mx: 3,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '8px',
  backgroundColor: 'background',
  height: '87px',
  minWidth: '174px'
}

type SliderProps = LogosCollectionFragment & { isAlt?: boolean }

const CompaniesSlider = ({
  tagline,
  logosCollection,
  action,
  isAlt
}: SliderProps) => {
  const items = logosCollection?.items?.slice(0, 6)

  return (
    <div
      sx={{
        maxWidth: '1300px',
        mx: 'auto',
        px: 2,
        pb: '28px',
        minHeight: '60px',
        mt: isAlt
          ? [
              '-170px',
              '-130px',
              '-130px',
              '-135px',
              '-100px',
              '-145px',
              '-3.5%'
            ]
          : ['-130px', '-77px', '-77px', '-77px', '-40px', '-80px', '-3.5%'],
        '@media screen and (min-width: 200px) and (max-width: 449px)': {
          marginTop: isAlt ? '-173px !important' : '-173px !important'
        },
        '@media screen and (min-width: 350px) and (max-width: 600px)': {
          marginTop: isAlt ? '-180px' : '-180px'
        }
      }}
    >
      {tagline && (
        <Text
          sx={{ mb: 3, color: 'gray10', position: 'relative' }}
          variant="xl"
        >
          {withHighlightedText(tagline)}
        </Text>
      )}
      <div
        sx={{
          display: ['none', null, null, 'none', 'flex'],
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1300px',
          mx: 'auto',
          mt: 0
        }}
      >
        {items?.map((logo) => (
          <Logo
            key={logo?.name as any}
            {...logo}
            pushSx={{
              ...sx,
              '&  img': {
                filter: 'grayscale(1)'
              },
              backgroundColor: 'transparent !important',
              overflow: 'auto',
              margin: '3px 11.2px 24.5px 11.2px'
            }}
          />
        ))}
      </div>
      <Slider
        pushSx={{
          display: ['block', null, null, 'block', 'none']
        }}
        duration={1.5}
      >
        {items?.map((logo) => (
          <Logo
            key={logo?.name as any}
            {...logo}
            pushSx={{
              ...sx,
              '&  img': {
                filter: 'grayscale(1)'
              },
              padding: '25px 25px',
              backgroundColor: 'transparent !important',
              margin: '3px 11.2px 24.5px 11.2px',
              height: '100px',
              width: '250px',
              p: '15px 25px',
              minWidth: '250px'
            }}
          />
        ))}
      </Slider>
      {action && (
        <Link
          {...action}
          arrow
          variant="accent"
          sx={{ mt: 4, display: 'block', width: 'fit-content', mx: 'auto' }}
        />
      )}
    </div>
  )
}

export default CompaniesSlider
