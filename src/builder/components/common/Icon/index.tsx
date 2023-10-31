// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
React
import iconStyles from './icon.module.css'

type IconProps = {
  icon: string
}

const Icon = ({ icon }: IconProps) => {
  return (
    <div className={iconStyles.iconContainer}>
      <i className={`fa-regular fa-sm ${icon}`}></i>
    </div>
  )
}

export default Icon
