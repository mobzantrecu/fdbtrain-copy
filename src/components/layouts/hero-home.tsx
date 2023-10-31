/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
import { jsx, Box, SxStyleProp, Grid } from 'theme-ui'
import { Document } from '@contentful/rich-text-types'
import Link from 'components/primitives/link'
import {
  LinkFragment,
  LogosCollectionFragment,
  MediaFragment
} from 'lib/contentful/generated'
import SectionLayout from './section'
import { useLinesAnimation } from 'lib/gsap'
import ViewportWidthBox from './viewport-width-box'
import HeroDots from 'components/svgs/hero-dots'
import LanguagesSlider from 'components/compound/languages-slider'
import Image from 'next/image'

type Props = {
  title: string | null | undefined
  subtitle?: string | Document | null
  actions?: (LinkFragment | null)[] | null
  withoutLines?: boolean
  children?: React.ReactNode
  pushSx?: SxStyleProp
  slider?: LogosCollectionFragment | null | undefined
  isHome?: boolean
  isAlt?: boolean
  isFeatures?: boolean
  image?: MediaFragment | null
  heroImage?: string
}

const HeroHome = ({
  title,
  subtitle,
  actions,
  isAlt,
  withoutLines,
  children,
  pushSx,
  slider,
  isHome,
  isFeatures,
  heroImage
}: Props) => {
  if (
    !title &&
    !children &&
    (typeof subtitle === 'string' ? !subtitle : !subtitle?.nodeType)
  ) {
    return null
  }

  const svgRef = useLinesAnimation()

  return (
    <>
      <Grid
        gap={1}
        columns={1}
        sx={{
          ...pushSx
        }}
      >
        <Box>
          <Box
            sx={{
              '& div': {
                height: [
                  '630px',
                  '630px',
                  '630px',
                  '630px',
                  '630px',
                  '630px',
                  '630px'
                ],
                '@media screen and (min-width: 394px) and (max-width: 449px)': {
                  height: '630px'
                },
                '@media screen and (min-width: 350px) and (max-width: 600px)': {
                  height: '630px'
                },
                '@media screen and (min-width: 808px) and (max-width: 831px)': {
                  height: '630px'
                },
                '@media screen and (min-width: 1025px) and (max-width: 1280px)': {
                  height: '630px'
                },
                '@media screen and (min-width: 200px) and (max-width: 350px)': {
                  height: '630px'
                },
                '& > img': {
                  objectFit: 'fill !important' as any,
                  '@media screen and (min-width: 200px) and (max-width: 702px)': {
                    objectFit: 'cover !important' as any
                  },
                  '@media screen and (min-width: 1500px) and (max-width: 5000px)': {
                    objectFit: 'fill !important' as any
                  }
                }
              }
            }}
          >
            <Image
              sx={{
                minWidth: [
                  '166% !important',
                  '166% !important',
                  '128% !important',
                  '100%',
                  '100%'
                ],
                left: ['-200px !important', '-200px !important', 0, 0, 0]
              }}
              unoptimized
              src={
                heroImage
                  ? heroImage
                  : isAlt
                  ? '/images/backgrounds/dark-light-curve@1x.png'
                  : '/images/backgrounds/dark-light-curve.png'
              }
              layout="fill"
              objectFit={'cover'}
              objectPosition="bottom"
              quality={100}
              priority
              draggable={false}
              loading={'eager' as any}
            />
          </Box>

          <SectionLayout
            title={{ text: title }}
            subtitle={subtitle}
            isAlt={isAlt}
            pushSx={{
              pb: 0,
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
              '& h1': {
                textAlign: 'center !important' as any
              },
              '& p': {
                marginTop: '10px !important',
                marginBottom: '15px',
                minWidth: [200, 500, 600, 943, 943, 943],
                textAlign: 'center !important' as any
              },
              '& > div:first-of-type': {
                pt: '0px',
                width: '100% !important',
                margin: '0px !important',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column'
              },
              '& > div > div': {
                margin: '0px !important',
                alignSelf: 'center !important',
                display: 'flex'
              },
              '& > div + div': {
                mx: '0px !important',
                justifyContent: 'center !important'
              }
            }}
            noContentDivider
            isHero
          >
            <Box
              style={{ textAlign: 'center', width: 'fit-content !important' }}
            >
              {actions?.map((action, i) => {
                if (!action) return null
                return (
                  <Link
                    key={`${action?.href}-${i}`}
                    variant={
                      i === 0 ? 'buttons.secondary' : 'buttons.darkSecondary'
                    }
                    sx={{
                      ':not(:last-of-type)': { mr: 15 },
                      height: '35px',
                      textTransform: 'uppercase',
                      fontSize: ['11px', '12px'],
                      letterSpacing: '0.5px',
                      lineHeight: '16px',
                      ml: '2px',
                      px: ['13px', '33px'],
                      ':last-of-type': {
                        px: '23.5px',
                        lineHeight: '17px'
                      },
                      width: 'fit-content'
                    }}
                    {...action}
                  />
                )
              })}
            </Box>
          </SectionLayout>
        </Box>
        {/* TODO: This disabled the left home image {!isAlt && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            {isHome && (
              <div>
                <Box
                  sx={{
                    display: ['none', 'none', 'block', 'block', 'block'],
                    maxWidth: 'none',
                    height: '30rem',
                    width: 778,
                    position: 'relative'
                  }}
                >
                  <Image
                    src={image?.url ?? ''}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="left"
                    sizes="60vw"
                    quality={100}
                  />
                </Box>
              </div>
            )}
            {children && isFeatures && (
              <Box
                sx={{
                  pt: '11px',
                  textAlign: 'center',
                  backgroundColor: isHome ? '#f9f9f9' : '',
                  '&>div>div:nth-of-type(2)': {
                    marginTop: '50px',
                    paddingBottom: '30px'
                  },
                  '&>div>div>a': {
                    backgroundColor: isHome ? '#fff' : '',
                    '&>img': {
                      height: '120%'
                    }
                  }
                }}
              >
                {children}
              </Box>
            )}
          </Box>
        )} */}
      </Grid>
      {!withoutLines && (
        <ViewportWidthBox>
          <Box>
            <HeroDots pushSx={{ mt: 64 }} ref={svgRef} />
          </Box>
        </ViewportWidthBox>
      )}
      {children && !isFeatures && (
        <Box
          sx={
            {
              backgroundColor: 'transparent',
              pt: [2, 3, 3, 3, 3, 4],
              mt: [5, 0, 0, 0, 0, 0],
              position: 'relative',
              textAlign: 'center',
              '&>div': {
                '@media screen and (max-width: 449px)': {
                  pb: 0
                }
              },
              '&>div>div:nth-of-type(2)': {
                marginTop: isAlt
                  ? '30px'
                  : ['90px', '37px', '30px', '30px', '0px'],
                paddingBottom: '0px'
              },
              '&>div>div>a': {
                backgroundColor: isHome ? '#fff' : ''
              }
            } as any
          }
        >
          {children}
        </Box>
      )}
      {slider && (
        <LanguagesSlider
          {...slider}
          pushSx={{ mt: actions?.length ? 5 : undefined }}
        />
      )}
    </>
  )
}

export default HeroHome
