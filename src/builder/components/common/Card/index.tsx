// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
React
import cardStyles from './card.module.css'

type CardProps = {
  children: JSX.Element[]
  layoutComponentClasses?: string
}

const Card = ({ children, layoutComponentClasses }: CardProps) => {
  return (
    <div className={`${cardStyles.card} ${layoutComponentClasses}`}>
      {children}
    </div>
  )
}

export default Card
