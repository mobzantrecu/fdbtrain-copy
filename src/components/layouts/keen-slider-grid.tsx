/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
React

import { jsx, SxStyleProp, Box, IconButton, Flex } from 'theme-ui'
import { useKeenSlider } from 'keen-slider/react'
import { TOptionsEvents } from 'keen-slider'
import { Children, isValidElement, useMemo, useState } from 'react'
import theme from 'lib/theme'

type Props = {
  config?: Omit<TOptionsEvents, 'slidesPerView' | 'breakpoints'>
  pushSx?: SxStyleProp
  withArrowControls?: boolean
  slidesPerView?: number | number[]
}

const KeenSliderGrid: React.FC<Props> = ({
  children,
  config,
  pushSx,
  withArrowControls = false,
  slidesPerView
}) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const breakpoints = useMemo(() => {
    if (!Array.isArray(slidesPerView)) return
    const br: Record<string, { slidesPerView: number }> = {}
    slidesPerView.forEach((n, i) => {
      br[`(min-width: ${theme.breakpoints[i]})`] = { slidesPerView: n }
    })
    return br
  }, [slidesPerView])

  const [sliderRef, slider] = useKeenSlider({
    breakpoints,
    slidesPerView: Array.isArray(slidesPerView)
      ? slidesPerView[0]
      : slidesPerView,
    duration: 1000,
    spacing: 20,
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
    ...config
  })

  return (
    <>
      <Box
        className="keen-slider"
        ref={sliderRef as React.RefObject<HTMLDivElement>}
        sx={
          {
            position: 'relative',
            overflow: 'visible',
            width: '90%',
            ...pushSx
          } as any
        }
      >
        {Children.map(children, (child) => {
          // Add the keen-slider__slide className to children
          if (isValidElement(child)) {
            return {
              ...child,
              props: {
                ...child.props,
                className: `${
                  child.props.className ? `${child.props.className} ` : ''
                }keen-slider__slide`
              }
            }
          }
          return child
        })}
      </Box>
      {slider && withArrowControls && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mt: 3
          }}
        >
          <IconButton
            aria-label="go back"
            sx={{
              variant: 'links.slider',
              '&:disabled': { '&:hover': { opacity: 1 } },
              display: 'inline-flex',
              px: [1, '0px', '8px'],
              '&:focus': { outline: 'none' }
            }}
            onClick={slider?.prev}
          >
            <i className="fa-solid fa-arrow-left"></i>
          </IconButton>
          <Flex>
            {[...Array(slider.details().size).keys()].map((idx) => {
              return (
                <button
                  aria-label={`relative ${idx}`}
                  key={idx}
                  onClick={() => {
                    slider.moveToSlideRelative(idx)
                  }}
                  sx={{
                    width: '12px',
                    height: '12px',
                    bg: currentSlide === idx ? 'lilac6' : '#f9f9f9',
                    border:
                      currentSlide === idx ? '#f9f9f9' : '2px solid #604BE9',
                    borderRadius: 'full',
                    mx: ['6px', '4px'],
                    '@media screen and (max-width: 395px)': {
                      mx: '6px'
                    },
                    '@media screen and (max-width: 350px)': {
                      mx: '1'
                    },
                    '&:focus': { outline: 'none' }
                  }}
                />
              )
            })}
          </Flex>
          <IconButton
            aria-label="go forward"
            sx={{
              variant: 'links.slider',
              '&:disabled': { '&:hover': { opacity: 1 } },
              display: 'inline-flex',
              px: [1, '0px', '8px'],
              '&:focus': { outline: 'none' }
            }}
            onClick={slider?.next}
          >
            <i className="fa-solid fa-arrow-right"></i>
          </IconButton>
        </Box>
      )}
    </>
  )
}

export default KeenSliderGrid
