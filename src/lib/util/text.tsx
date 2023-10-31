/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
React

import { jsx } from 'theme-ui'
import { keyframes } from '@emotion/core'
import withHighlightedText from '../contentful/renderers/highlight'

const enhancedFontColor = '#896BFF'

const animation = keyframes({
  '0%': {
    transform: 'translateY(0em)'
  },
  '100%': {
    transform: 'translateY(-15px)'
  }
})

const animationSigns = ['~']

const getEnhancedText = (text: string) => {
  const wordToAnimate = text.substring(
    text.indexOf('~') + 1,
    text.lastIndexOf('~')
  )
  const textArr = text.split(' ')

  const spanArray = wordToAnimate.split('').map((letter, i) => {
    return (
      <span
        key={i}
        id={`span-${i}`}
        sx={{
          color: enhancedFontColor,
          animation: `${animation} 1.5s 1 ease-in-out forwards`,
          animationDelay: `0.${wordToAnimate.length - i + 1}s`,
          display: 'inline-block',
          marginTop: ['10px']
        }}
      >
        {letter}
      </span>
    )
  })

  const index = textArr.findIndex(
    (text) => text.toLowerCase() === `~${wordToAnimate.toLowerCase()}~`
  )

  textArr[index] = (
    <span
      sx={{
        display: 'inline-block'
      }}
    >
      {spanArray.map((span) => span)}
    </span>
  ) as any

  return textArr
}

export const getDistributedArray = (
  text: string,
  textToColor?: string,
  splitBy = ' ',
  sx = {},
  accentColor = enhancedFontColor
) => {
  if (!text) return
  const textArr = text.split(splitBy)
  const index = textArr.findIndex((text) => text.toLowerCase() === textToColor)
  textArr[index] = (
    <span
      sx={{ ...sx }}
      style={{
        color: accentColor
      }}
    >
      {textArr[index]}
    </span>
  ) as any
  return textArr
}

export const hasAnimationCharacter = (text: string) => {
  const hasSign = animationSigns.some((sign) => text.includes(sign))
  return hasSign
}

const textsToColor = ['distributed', 'scalable']

export const renderForHardcodedText = (
  text?: string,
  highlightOptions?: any,
  isAlt?: boolean,
  enhancedText?: any | any[],
  splitBy = ' ',
  coloredTextSx = {},
  otherTextSx = {},
  accentColor = enhancedFontColor,
  getTextToColor?: any
) => {
  if (!getTextToColor) {
    getTextToColor = () => ''
  }
  if (!text) {
    return
  }
  const textToColor =
    textsToColor.find((x) => text.toLowerCase().includes(x.toLowerCase())) ||
    getTextToColor(text)

  if (!enhancedText && (textToColor || isAlt)) {
    const distributedText = getDistributedArray(
      text,
      textToColor,
      splitBy,
      coloredTextSx,
      accentColor
    )
    if (distributedText) {
      return distributedText.map((node: string) => (
        <span sx={{ ...otherTextSx }} key={node}>
          {node}{' '}
        </span>
      ))
    }
  }

  if (enhancedText) {
    return enhancedText.map((node: string) => (
      <span key={node + Math.random()}>{node} </span>
    ))
  }

  return withHighlightedText(text, highlightOptions)
}

export default getEnhancedText
