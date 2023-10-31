// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
React
import purpleButtonStyles from '../buttonStyles.module.css'
import ButtonProps from '../types'

const WhiteButton = ({ title, href, target, onClick }: ButtonProps) => {
  return (
    <a
      onClick={onClick}
      target={target}
      className={`${purpleButtonStyles.button} ${purpleButtonStyles.whiteButton} `}
      href={href}
    >
      {title}
    </a>
  )
}

export default WhiteButton
