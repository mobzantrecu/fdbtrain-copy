import React, { FC } from 'react'
import cn from 'classnames'

import { PropTypes } from './Spinner.types'
import defaultClassName from '../../css/defaultClassName'

//import "./Spinner.css";

const sizes = {
  small: {
    width: 12,
    height: 12
  },
  medium: {
    width: 16,
    height: 16
  },
  large: {
    width: 20,
    height: 20
  }
}

const Spinner: FC<PropTypes> = ({ size = 'medium', theme = 'primary' }) => {
  const circleClass = cn(defaultClassName, 'spinner', theme)

  return (
    <svg {...sizes[size]} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
      <circle
        r="35"
        cx="50"
        cy="50"
        fill="none"
        strokeWidth="7"
        strokeDasharray="164.93361431346415 56.97787143782138"
        className={circleClass}
      >
        <animateTransform
          type="rotate"
          calcMode="linear"
          attributeName="transform"
          values="0 50 50;360 50 50"
          begin="0s"
          dur="0.75s"
          keyTimes="0;1"
          repeatCount="indefinite"
        ></animateTransform>
      </circle>
    </svg>
  )
}

export default Spinner
