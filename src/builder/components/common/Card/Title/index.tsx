// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
React
import titleStyles from './title.module.css'

type TitleProps = {
  children: string
}

const Title = ({ children }: TitleProps) => {
  return <h1 className={titleStyles.title}>{children}</h1>
}

export default Title
