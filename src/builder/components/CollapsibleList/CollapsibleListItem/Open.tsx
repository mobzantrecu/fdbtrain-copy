// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
React
import collapsibleListStyles from '../collapsibleList.module.css'

type Open = {
  onClick: () => void
}

export const Open = ({ onClick }: Open) => {
  return (
    <svg
      className={collapsibleListStyles.open}
      onClick={onClick}
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5 8.5V0H8.5V8.5H0V12.5H8.5V21H12.5V12.5H21V8.5H12.5Z"
        fill="#6742F1"
      />
    </svg>
  )
}

export default Open
