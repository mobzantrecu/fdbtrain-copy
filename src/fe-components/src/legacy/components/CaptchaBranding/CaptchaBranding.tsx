import React, { FC } from 'react'
import cn from 'classnames'

import { PropTypes } from './CaptchaBranding.types'
import defaultClassName from '../../css/defaultClassName'

//import "./CaptchaBranding.css";

const CaptchaBranding: FC<PropTypes> = () => {
  const captchaBrandingClass = cn(defaultClassName, 'captcha-branding')

  return (
    <div className={captchaBrandingClass}>
      This site is protected by reCAPTCHA and the Google
      <a href="https://policies.google.com/privacy"> Privacy Policy</a> and
      <a href="https://policies.google.com/terms"> Terms of Service</a> apply.
    </div>
  )
}

export default CaptchaBranding
