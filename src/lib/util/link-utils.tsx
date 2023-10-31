/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
React

import { Text, jsx } from 'theme-ui'

export const hasBulletPoint = (children: unknown) => {
  const isString = typeof children === 'string'
  if (isString && children?.trim().startsWith('-')) {
    return true
  }
  return false
}

export const returnTextWithoutBulletPoints = (children: string[]) => {
  const firstChild = children[0]
  const stringList = firstChild.split(' ')

  stringList.shift()

  children[0] = stringList.join(' ')

  return children
}

export const getParagraph = (children: string[], hasBullet: boolean) => {
  const textContent = hasBullet
    ? returnTextWithoutBulletPoints(children)
    : children

  return (
    <Text as="p" sx={{ ':not(:last-of-type)': { mb: '8px' } }}>
      {textContent}
    </Text>
  )
}
