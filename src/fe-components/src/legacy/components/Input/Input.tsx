import React, { FC } from 'react'
import cn from 'classnames'

import { PropTypes } from './Input.types'
import defaultClassName from '../../css/defaultClassName'

//import "./Input.css";

const Input: FC<PropTypes> = ({
  id,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange = () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onBlur = () => {},
  defaultValue,
  size = 'medium',
  fullscreen = false,
  label,
  required = false,
  error = false,
  errorLabel,
  type = 'text'
}) => {
  React
  const inputClass = cn(
    defaultClassName,
    'input',
    size,
    { error },
    { fullscreen }
  )
  const inputLabelClass = cn(defaultClassName, 'input-label')
  const inputErrorLabelClass = cn(defaultClassName, 'input-label', 'error')

  return (
    <div>
      {label && (
        <div className={inputLabelClass}>
          {label} {required && <sup>&nbsp;*</sup>}
        </div>
      )}
      <input
        id={id}
        type={type}
        className={inputClass}
        onChange={onChange}
        onBlur={onBlur}
        defaultValue={defaultValue}
      ></input>
      {error && errorLabel && (
        <div className={inputErrorLabelClass}>{errorLabel}</div>
      )}
    </div>
  )
}

export default Input
