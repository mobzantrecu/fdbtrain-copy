// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
React
import linkStyles from './link.module.css'

type LinkProps = {
  title: string
  href: string
  target: string
}

const Link = ({ title, href, target }: LinkProps) => {
  return (
    <a target={target} className={linkStyles.link} href={href}>
      {title}
      <div className={linkStyles.iconContainer}>
        <i
          className={`fa-regular fa-arrow-right-long fa-sm ${linkStyles.arrowIcon}`}
        ></i>
      </div>
    </a>
  )
}

export default Link
