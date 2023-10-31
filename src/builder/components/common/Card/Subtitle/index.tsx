// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
React
import subtitleStyles from './subtitle.module.css'

type SubtitleProps = {
  children: string
}

const Subtitle = ({ children }: SubtitleProps) => {
  return <h3 className={subtitleStyles.subtitle}>{children}</h3>
}

export default Subtitle
