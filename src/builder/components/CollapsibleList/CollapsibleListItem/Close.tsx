// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
React
import collapsibleListStyles from '../collapsibleList.module.css'

type Close = {
  onClick: () => void
}

export const Close = ({ onClick }: Close) => {
  return (
    <svg
      className={collapsibleListStyles.close}
      onClick={onClick}
      width="21"
      height="4"
      viewBox="0 0 21 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="21" height="4" fill="#6742F1" />
    </svg>
  )
}

export default Close
