/** @jsx jsx */
import { jsx, Box, SxStyleProp, Button, Grid } from 'theme-ui'
import { Document } from '@contentful/rich-text-types'
import Link from 'components/primitives/link'
import {
  LinkFragment,
  LogosCollectionFragment,
  Maybe,
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
  containerSx?: SxStyleProp
  slider?: LogosCollectionFragment | null | undefined
  isHome?: boolean
  isFeatures?: boolean
  image?: MediaFragment | null
  imageIsStacked?: boolean | null
  backgroundImageColor?: Maybe<string>
}

const Hero = ({
  backgroundImageColor,
  title,
  subtitle,
  actions,
  withoutLines,
  children,
  pushSx,
  containerSx,
  slider,
  isHome,
  isFeatures,
  image,
  imageIsStacked
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
        columns={[
          1,
          1,
          image && !imageIsStacked ? '59% 41%' : 1,
          image && !imageIsStacked ? '53% 47%' : 1,
          image && !imageIsStacked ? '53% 47%' : 1
        ]}
        sx={{
          ...containerSx
        }}
      >
        <Box>
          <SectionLayout
            backgroundImageColor={backgroundImageColor}
            title={{ text: title }}
            subtitle={subtitle}
            pushSx={{
              pb: ['16px', null, '32px'],
              ...pushSx
            }}
            noContentDivider
            isHero
          >
            <Box>
              {actions?.map((action, i) => {
                if (!action) return null
                return (
                  <Link
                    key={`${action?.href}-${i}`}
                    variant={i === 0 ? 'buttons.primary' : 'buttons.secondary'}
                    sx={{
                      ':not(:last-of-type)': { mr: 15 },
                      zIndex: 'general',
                      position: 'relative',
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
            {isHome && (
              <div>
                <Box
                  sx={{
                    position: 'absolute',
                    right: 0,
                    top: '62px'
                  }}
                >
                  <img
                    src="/images/backgrounds/console-mockup.png"
                    // width={653}
                    // height={479}
                    sx={{
                      width: [0, 0, 335, 505, 570, 653],
                      height: ['auto', 'auto', 400, 'auto', 'auto', 'auto']
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    position: 'absolute',
                    right: [390, 390, 170, 340, 390, 471],
                    top: ['75px']
                  }}
                >
                  <img
                    src="/images/backgrounds/header-console.svg"
                    // width={175}
                    // height={'auto'}
                    sx={{ width: [0, 0, 160, 160, 175, 175] }}
                  />
                </Box>
                <Box
                  sx={{
                    position: 'absolute',
                    right: [0, 0, -225, 0, 0, 0],
                    top: '78px',
                    overflowX: 'hidden'
                  }}
                >
                  <img
                    src="/images/backgrounds/table.svg"
                    // width={469}
                    // height={241}
                    sx={{ width: [0, 0, 385, 350, 400, 469] }}
                  />
                  <Button
                    variant="buttons.outline"
                    sx={{
                      position: 'absolute',
                      top: '15px',
                      right: '-12px',
                      textTransform: 'uppercase',
                      fontSize: '8px',
                      px: '6.5px',
                      height: '19px'
                    }}
                    disabled
                  >
                    Create Database
                  </Button>
                </Box>
                <Box
                  sx={{
                    position: 'absolute',
                    right: [0, 0, -225, 0, 0, 0],
                    top: [300, 300, 295, 273, 300, 335]
                  }}
                >
                  <img
                    src="/images/backgrounds/graph.svg"
                    // width={469}
                    // height={190}
                    sx={{ width: [0, 0, 385, 350, 400, 469] }}
                  />
                </Box>
                <Box
                  sx={{
                    position: 'absolute',
                    right: [390, 390, 150, 340, 390, 460],
                    top: ['90px', '90px', '90px', '78px', '78px', '78px']
                  }}
                >
                  <img
                    src="/images/backgrounds/cellphone.svg"
                    // width={313.4}
                    // height={635.3}
                    sx={{
                      width: [0, 0, 300, 300, 313.4, 313.4],
                      height: [0, 0, 540, 580, 635.3, 635.3]
                    }}
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
          </SectionLayout>
        </Box>

        {image && (
          <Box
            sx={{
              display: ['none', 'none', 'block', 'block', 'block'],
              maxWidth: 'none',
              height: '30rem',
              width: 778,
              position: 'relative',
              margin: '64px auto 0'
            }}
          >
            <Image
              src={image.url ?? 'images/backgrounds/HeroImage.png'}
              width={image.width ?? 500}
              height={image.height ?? 300}
              alt={image.description ?? 'Hero Image'}
              objectFit="cover"
              objectPosition="left"
              sizes="60vw"
              quality={100}
            />
          </Box>
        )}
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
          sx={{
            pt: [2, 5],
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
      <Box sx={{ backgroundColor: 'gray2' }}>
        {slider && (
          <LanguagesSlider
            {...slider}
            pushSx={{ mt: actions?.length ? 5 : undefined }}
          />
        )}
      </Box>
    </>
  )
}

export default Hero
