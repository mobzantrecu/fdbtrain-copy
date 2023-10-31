/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
React

import { jsx, Box, Container, Heading, SxStyleProp, Text } from 'theme-ui'
import { forwardRef, ReactNode, useEffect, useState } from 'react'
import defaultRenderer from 'lib/contentful/renderers'
import withHighlightedText from 'lib/contentful/renderers/highlight'
import { Document } from '@contentful/rich-text-types'
import Divider from 'components/primitives/divider'
import { Maybe } from 'graphql/jsutils/Maybe'
import getEnhancedText, {
  hasAnimationCharacter,
  renderForHardcodedText
} from '../../lib/util/text'

type Props = {
  children: ReactNode
  headingContainerPushSx?: SxStyleProp
  id?: string
  anchorId?: string | null
  pushSx?: SxStyleProp
  subtitle?: Document | string | null
  title?: {
    text: Parameters<typeof withHighlightedText>[0]
    highlightOptions?: Parameters<typeof withHighlightedText>[1]
  }
  isHero?: boolean
  isIconCardsGrid?: boolean
  isZigZag?: boolean
  isMediaCards?: boolean
  isVerifiedByJepsen?: boolean
  noContentDivider?: boolean
  smallContainer?: boolean
  smallHeading?: boolean
  alignLeft?: boolean
  backgroundImageColor?: Maybe<string>
  backgroundColor?: Maybe<string>
  largeWidth?: boolean
  isAlt?: boolean
  noLinkIcon?: boolean
  textToColor?: boolean
}

const SectionLayout = forwardRef<HTMLDivElement, Props>(
  (
    {
      isAlt = false,
      children,
      headingContainerPushSx,
      noLinkIcon = false,
      id,
      pushSx,
      subtitle,
      title,
      isHero,
      isIconCardsGrid,
      isMediaCards,
      isZigZag,
      isVerifiedByJepsen,
      noContentDivider,
      smallContainer,
      smallHeading,
      alignLeft,
      anchorId,
      largeWidth,
      backgroundImageColor,
      backgroundColor,
      textToColor
    },
    ref
  ) => {
    const [enhancedText, setEnhancedText] = useState(() => {
      if (hasAnimationCharacter(title?.text || '')) {
        return getEnhancedText(title?.text || '')
      }
      return ''
    })

    const hasCopy =
      !!title?.text ||
      (typeof subtitle === 'string' ? !!subtitle : !!subtitle?.nodeType)
    const hasDivider = !noContentDivider && hasCopy

    useEffect(() => {
      if (enhancedText) {
        const interval = setInterval(() => {
          if (typeof enhancedText === 'object') {
            setEnhancedText([...enhancedText])
          }
        }, 20000)
        return () => {
          clearInterval(interval)
        }
      }
    }, [enhancedText])

    return (
      <Box
        sx={
          {
            position: 'relative',
            zIndex: 'general',
            width: isAlt ? '100% !important' : '100% !important',
            backgroundColor: backgroundColor ? backgroundColor : 'unset'
          } as any
        }
        id={anchorId ?? undefined}
      >
        <Container
          variant={smallContainer ? 'sectionSmall' : 'section'}
          sx={{
            color: 'gray10',
            pt: !hasCopy ? ['16px', '32px'] : undefined,
            py: isZigZag ? ['64px', '64px', null, '66px'] : '',
            pb: isZigZag ? ['10px', '32px', '64px', null, '5px'] : '',
            ...pushSx
          }}
          ref={ref}
        >
          {(title?.text || subtitle) && (
            <Box
              sx={
                {
                  zIndex: 'general',
                  position: 'relative',
                  mb: isIconCardsGrid ? '16px' : '24px',
                  ...headingContainerPushSx
                } as any
              }
            >
              {title && (
                <Heading
                  as={isHero ? 'h1' : 'h2'}
                  variant={isHero ? 'heading.1' : 'heading.2'}
                  sx={{
                    position: 'relative',
                    maxWidth: '1136px',
                    mb: subtitle
                      ? alignLeft
                        ? '40px'
                        : isVerifiedByJepsen
                        ? '22px'
                        : 3
                      : 0,
                    mx: 'auto',
                    textAlign: 'center',
                    fontSize: smallHeading ? ['28px', '32px'] : undefined,
                    letterSpacing: isMediaCards ? '1px' : '0px'
                  }}
                >
                  <span sx={{ position: 'absolute', top: '-164px' }} id={id} />
                  {isHero || textToColor
                    ? renderForHardcodedText(
                        title.text || '',
                        title.highlightOptions,
                        isAlt,
                        enhancedText
                      )
                    : withHighlightedText(title.text, title.highlightOptions)}
                </Heading>
              )}
              {subtitle && (
                <Text
                  sx={{
                    fontSize: '22px',
                    lineHeight: '26px',
                    textAlign: alignLeft ? 'left' : 'center',
                    mx: 'auto',
                    maxWidth: alignLeft
                      ? '100%'
                      : largeWidth
                      ? '950px'
                      : '900px',
                    'p:not(:last-of-type)': { mb: 3 }
                  }}
                >
                  {typeof subtitle === 'string'
                    ? subtitle
                    : defaultRenderer(
                        subtitle,
                        false,
                        backgroundImageColor,
                        noLinkIcon
                      )}
                </Text>
              )}
            </Box>
          )}
          {hasDivider && (
            <Divider size={[3, null, '26px']} isVertical isTransparent />
          )}
          {children}
        </Container>
      </Box>
    )
  }
)

export default SectionLayout
