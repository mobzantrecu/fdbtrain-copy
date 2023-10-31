// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
React
import additionalTitleStyles from './additionalTitle.module.css'

type AdditionalTitleProps = {
  children: string
}

const AdditionalTitle = ({ children }: AdditionalTitleProps) => {
  return <h1 className={additionalTitleStyles.additionalTitle}>{children}</h1>
}

export default AdditionalTitle
