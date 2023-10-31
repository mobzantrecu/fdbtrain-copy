// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
React

export interface PropTypes {
  id?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  onBlur?: React.FocusEventHandler<HTMLInputElement>
  defaultValue?: string
  size?: 'small' | 'medium' | 'large'
  fullscreen?: boolean
  label?: string
  required?: boolean
  error?: boolean
  errorLabel?: string
  obscure?: boolean
  type?: 'text' | 'password'
}
