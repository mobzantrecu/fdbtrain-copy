/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
React

import { jsx, Box, IconButton, Flex } from 'theme-ui'
import { useKeenSlider } from 'keen-slider/react'
import SectionLayout from 'components/layouts/section'
import { SectionFragment } from 'lib/contentful/generated'
import { useState } from 'react'
import OurCorePrinciplesCard from 'components/cards/our-core-principles'
import defaultRenderer from 'lib/contentful/renderers'

const CorePrinciples = ({
  title,
  subtitle,
  blocksCollection,
  anchorLinkId,
  backgroundImage
}: SectionFragment) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0)

  const [sliderRef, slider] = useKeenSlider({
    slidesPerView: 1.7,
    duration: 1000,
    spacing: 60,
    centered: true,
    initial: 0,
    breakpoints: {
      '(max-width: 1024px)': {
        slidesPerView: 1.2
      },
      '(max-width: 640px)': {
        slidesPerView: 1
      }
    },
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    }
  })

  return (
    <Box sx={{ overflow: 'hidden', backgroundColor: 'gray2' }}>
      <SectionLayout
        anchorId={anchorLinkId}
        subtitle={subtitle?.json}
        title={{ text: title }}
        isHero
        largeWidth
        pushSx={{
          '&>div>h1': {
            fontWeight: 600
          }
        }}
      >
        <div
          sx={{
            display: 'grid',
            gridTemplateColumns: ['1fr', '1fr 1fr', '1fr 1fr 1fr'],
            gap: ['20px 0', '40px 60px', '40px 30px'],
            mx: '12%'
          }}
        >
          {blocksCollection?.items?.map((item, i) => {
            if (item?.__typename === 'SectionBlock') {
              return (
                <div
                  key={i}
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    p: '45px 0 35px 40px',
                    backgroundColor: 'background',
                    borderRadius: '8px',
                    boxShadow: 'cardInteractive',
                    transition: 'box-shadow .2s',
                    ':hover': {
                      boxShadow: 'cardHover'
                    },
                    '@media screen and (max-width: 425px)': {
                      p: '45px 10px 35px 15px'
                    }
                  }}
                >
                  <img
                    src={item?.media?.url ?? ''}
                    alt={item?.media?.title ?? ''}
                  />
                  <p
                    onClick={() => {
                      slider.moveToSlideRelative(i)
                    }}
                    sx={{
                      fontWeight: 600,
                      fontSize: '16px',
                      marginLeft: '15px',
                      marginTop: '-4px',
                      color: currentSlide === i ? '#9439F9' : 'gray10',
                      cursor: 'pointer',
                      letterSpacing: '0.7px',
                      '@media screen and (max-width: 425px)': {
                        textAlign: 'center'
                      }
                    }}
                  >
                    {item?.title}
                  </p>
                </div>
              )
            }
            return null
          })}
        </div>
      </SectionLayout>

      {/* SLIDER */}
      <Box
        sx={
          {
            overflowX: 'hidden',
            backgroundImage: `url(${backgroundImage?.url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: 'gray2',
            paddingBlock: '130px 95px'
          } as any
        }
      >
        <SectionLayout>
          <Box
            className="keen-slider"
            ref={sliderRef as React.RefObject<HTMLDivElement>}
            sx={
              {
                position: 'relative',
                overflow: 'visible',
                width: '100%'
              } as any
            }
          >
            {blocksCollection?.items.map((card, i) => {
              if (card?.__typename === 'SectionBlock') {
                return (
                  <OurCorePrinciplesCard
                    className="keen-slider__slide"
                    key={i}
                    title={card.title ?? ''}
                    content={
                      defaultRenderer(
                        card.subtitle?.json,
                        false,
                        backgroundImage?.title
                      ) ?? ''
                    }
                  />
                )
              }
              return null
            })}
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mt: 52
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
              <i className="fa-regular fa-chevron-left"></i>
            </IconButton>
            <Flex>
              {blocksCollection?.items.map((item, index) => {
                return (
                  <button
                    aria-label={`to ${index}`}
                    key={
                      item?.__typename === 'SectionBlock'
                        ? (item.title as any)
                        : (index as any)
                    }
                    onClick={() => {
                      slider.moveToSlideRelative(index)
                    }}
                    sx={{
                      width: '14px',
                      height: '14px',
                      bg: currentSlide === index ? 'lilac6' : 'white',
                      borderRadius: 'full',
                      mx: ['6px', '10px'],
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
              <i className="fa-regular fa-chevron-right"></i>
            </IconButton>
          </Box>
        </SectionLayout>
      </Box>
    </Box>
  )
}

export default CorePrinciples
