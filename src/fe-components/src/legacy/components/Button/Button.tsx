import React, { FC } from 'react'
import cn from 'classnames'
import Spinner from '../Spinner'

import { PropTypes } from './Button.types'
import defaultClassName from '../../css/defaultClassName'

//import "./Button.css";

const Button: FC<PropTypes> = ({
  id,
  children,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick = () => {},
  image,
  theme = 'primary',
  size = 'medium',
  gradient = false,
  fullscreen = false,
  loading = false,
  disabled = false
}) => {
  const buttonClass = cn(
    defaultClassName,
    'button',
    theme,
    size,
    { loading },
    { disabled },
    { gradient },
    { fullscreen }
  )

  return (
    <button
      id={id}
      onClick={onClick}
      disabled={disabled}
      className={buttonClass}
    >
      {loading ? (
        <Spinner size={size} theme={theme} />
      ) : (
        <>
          {image && image}
          {children}
        </>
      )}
    </button>
  )
}

export default Button
