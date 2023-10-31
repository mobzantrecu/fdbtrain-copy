/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
React

import { jsx, SxStyleProp } from 'theme-ui'
import { Fragment } from 'react'

type Highlighter = {
  separator: '**' | '__' | '<br>' | '||' | '|+' | '|'
  sx?: SxStyleProp
  breaksBefore?: boolean
  breaksAfter?: boolean
}

const brSx = { display: ['none', 'initial'] }

type HighlightProps = {
  input: string
  highlighters: Highlighter[]
  level: number
}

function highlight({
  input,
  highlighters,
  level
}: HighlightProps): JSX.Element | string {
  const highlighter = highlighters[level]
  if (!highlighter) return input
  const splitted = input.split(highlighter.separator) // ['The', 'data API', 'etc...']

  return (
    <>
      {splitted.map((part, i) => {
        if (i % 2 !== 0) {
          // Specific treatment for line breaks
          if (highlighter.separator === '<br>') {
            return (
              <Fragment key={i}>
                <br sx={brSx} />
                {highlight({
                  input: part,
                  highlighters,
                  level: level + 1
                })}
              </Fragment>
            )
          }
          return (
            <Fragment key={i}>
              {highlighter.breaksBefore && <br sx={brSx} />}
              <b sx={highlighter.sx}>
                {highlight({
                  input: part,
                  highlighters,
                  level: level + 1
                })}
              </b>
              {highlighter.breaksAfter && <br sx={brSx} />}
            </Fragment>
          )
        }
        return (
          <Fragment key={i}>
            {highlight({
              input: part,
              highlighters,
              level: level + 1
            })}
          </Fragment>
        )
      })}
    </>
  )
}

type Options = {
  highlighters?: Highlighter[]
}

const defaultHighlighters: Highlighter[] = [
  { separator: '__', sx: { fontWeight: 500, color: 'primary' } },
  { separator: '**', sx: { fontWeight: 700 } },
  { separator: '<br>' },
  { separator: '||', sx: { fontStyle: 'italic' } },
  { separator: '|+', sx: { fontSize: '32px' } },
  { separator: '|', sx: {} }
]

const withHighlightedText = (
  text: string | null | undefined,
  { highlighters = defaultHighlighters }: Options = {}
) => {
  if (!text) return ''
  return highlight({ input: text, highlighters, level: 0 })
}

export default withHighlightedText
export { defaultHighlighters }
