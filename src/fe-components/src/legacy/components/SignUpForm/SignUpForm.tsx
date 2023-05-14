import React, { FC, useRef, useState, useCallback } from 'react'

import cn from 'classnames'
import ReCAPTCHA from 'react-google-recaptcha'

import Input from '../Input'
import Button from '../Button'
import Divider from '../Divider'
import CaptchaBranding from '../CaptchaBranding'

import { PropTypes } from './SignUpForm.types'
import defaultClassName from '../../css/defaultClassName'

//import "./SignUpForm.css";

const MIN_PASSWORD_LENGTH = 8
const ERROR_MESSAGES = {
  no_email: 'You must enter an email.',
  invalid_email: 'Please enter a valid email address.',
  no_password: 'You must enter a password.',
  invalid_password: `Your password must be longer than ${
    MIN_PASSWORD_LENGTH - 1
  } characters.`,
  no_confirm_password: 'You must confirm your password.',
  invalid_confirm_password: `Your password must be longer than ${
    MIN_PASSWORD_LENGTH - 1
  } characters.`,
  confirm_password_does_not_match: 'Please ensure your passwords match.'
}

const validateEmail = (email: string): boolean => {
  const emailRegex = new RegExp(/[\S]+@[\S]+[.][\S]+/g)
  return emailRegex.test(email)
}

const validatePassword = (password: string) => {
  return password.length >= MIN_PASSWORD_LENGTH
}

const SignUpForm: FC<PropTypes> = ({
  apiUrl,
  dashboardUrl,
  onSubmit,
  captchaSiteKey = '',
  captchaEnabled = true,
  githubSignUpEnabled = true,
  netlifySignUpEnabled = false,
  backgroundTheme = 'primary',
  showFormError = false
}) => {
  const formErrorLabelClass = cn(defaultClassName, 'form-label', 'error')
  const formClass = cn(defaultClassName, 'sign-up-form', backgroundTheme)
  const formRowClass = cn(defaultClassName, 'sign-up-form-row')
  const formRowColumnsClass = cn(defaultClassName, 'sign-up-form-row-columns')
  const formRowClassExtraMargin = cn(
    defaultClassName,
    'sign-up-form-row',
    'extra-margin'
  )
  const titleClass = cn(defaultClassName, 'title')
  const titleContainerClass = cn(defaultClassName, 'title-container')

  const buttonLegendClass = cn(defaultClassName, 'button-legend')

  const formColumn50 = cn(defaultClassName, 'sign-up-form-column-50')

  const formColumn100 = cn(defaultClassName, 'sign-up-form-column-100')

  // Captcha ref
  const captchaRef = useRef<ReCAPTCHA>(null)

  // Email state
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [emailErrorLabel, setEmailErrorLabel] = useState('')

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
    if (emailError) setEmailError(false)
  }

  const onEmailBlur = () => {
    if (!email) {
      setEmailError(true)
      setEmailErrorLabel(ERROR_MESSAGES.no_email)
    } else if (!validateEmail(email)) {
      setEmailError(true)
      setEmailErrorLabel(ERROR_MESSAGES.invalid_email)
    } else {
      setEmailError(false)
      setEmailErrorLabel('')
    }
  }

  // Password state
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState(false)
  const [passwordErrorLabel, setPasswordErrorLabel] = useState('')

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
    if (passwordError) setPasswordError(false)
  }

  const onPasswordBlur = () => {
    if (!password) {
      setPasswordError(true)
      setPasswordErrorLabel(ERROR_MESSAGES.no_password)
    } else if (!validatePassword(password)) {
      setPasswordError(true)
      setPasswordErrorLabel(ERROR_MESSAGES.invalid_password)
    } else {
      setPasswordError(false)
      setPasswordErrorLabel('')
    }
  }

  // Confirm password state
  const [confirmPassword, setConfirmPassword] = useState('')
  const [confirmPasswordError, setConfirmPasswordError] = useState(false)
  const [confirmPasswordErrorLabel, setConfirmPasswordErrorLabel] = useState('')

  const onConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(event.target.value)
    if (confirmPasswordError) setConfirmPasswordError(false)
  }

  const onConfirmPasswordBlur = () => {
    if (!confirmPassword) {
      setConfirmPasswordError(true)
      setConfirmPasswordErrorLabel(ERROR_MESSAGES.no_confirm_password)
    } else if (!validatePassword(password)) {
      setConfirmPasswordError(true)
      setConfirmPasswordErrorLabel(ERROR_MESSAGES.invalid_confirm_password)
    } else if (password !== confirmPassword) {
      setConfirmPasswordError(true)
      setConfirmPasswordErrorLabel(
        ERROR_MESSAGES.confirm_password_does_not_match
      )
    } else {
      setConfirmPasswordError(false)
      setConfirmPasswordErrorLabel('')
    }
  }

  // Submission handlers
  const [submitting, setSubmitting] = useState(false)
  const onSubmitClicked = async () => {
    onEmailBlur()
    onPasswordBlur()
    onConfirmPasswordBlur()

    if (!email || !password || !confirmPassword) return
    if (emailError || passwordError || confirmPasswordError) return

    setSubmitting(true)

    let captchaToken: any = undefined
    if (captchaEnabled && captchaRef.current !== null) {
      captchaToken = await captchaRef.current.executeAsync()
      captchaRef.current.reset()
    }

    onSubmit(email, password, captchaToken).finally(() => setSubmitting(false))
  }

  const onNetlifyClicked = useCallback(() => {
    const oauthUrl =
      `${apiUrl}/oauth/start` +
      '?provider_name=netlify' +
      `&redirect_url=${dashboardUrl}/auth/oauth/callback`
    window.location.href = oauthUrl
  }, [])

  const onGithubClicked = useCallback(() => {
    const oauthUrl =
      `${apiUrl}/oauth/start` +
      '?provider_name=github' +
      `&redirect_url=${dashboardUrl}/auth/oauth/callback`
    window.location.href = oauthUrl
  }, [])

  return (
    <div className={formClass}>
      <div className={titleContainerClass}>
        <h3 className={titleClass}>Create your free Fauna account</h3>
      </div>
      <div className={formRowColumnsClass}>
        {githubSignUpEnabled && (
          <div className={netlifySignUpEnabled ? formColumn50 : formColumn100}>
            <Button
              size="large"
              theme="github"
              fullscreen={true}
              id="cloud-signup-cta-github"
              image={
                <img src="/images/misc/github-logo.png" alt="Github logo" />
              }
              onClick={onGithubClicked}
            >
              <span>github</span>
            </Button>
          </div>
        )}
        {netlifySignUpEnabled && (
          <div className={githubSignUpEnabled ? formColumn50 : formColumn100}>
            <Button
              size="large"
              theme="netlify"
              fullscreen={true}
              id="cloud-signup-cta-netlify"
              image={
                <img src="/images/misc/netlify-logo.svg" alt="Netlify logo" />
              }
              onClick={onNetlifyClicked}
            >
              <span>netlify</span>
            </Button>
          </div>
        )}
      </div>
      {(githubSignUpEnabled || netlifySignUpEnabled) && (
        <div className={formRowClassExtraMargin}>
          <Divider>or</Divider>
        </div>
      )}
      <div className={formRowClass}>
        <Input
          size="large"
          onBlur={onEmailBlur}
          onChange={onEmailChange}
          required={true}
          fullscreen={true}
          label="E-mail"
          error={emailError}
          errorLabel={emailErrorLabel}
          id="email"
        />
      </div>
      <div className={formRowColumnsClass}>
        <div className={formColumn50}>
          <Input
            size="large"
            onBlur={onPasswordBlur}
            onChange={onPasswordChange}
            type="password"
            required={true}
            fullscreen={true}
            label="Password"
            error={passwordError}
            errorLabel={passwordErrorLabel}
            id="password"
          />
        </div>
        <div className={formColumn50}>
          <Input
            size="large"
            onBlur={onConfirmPasswordBlur}
            onChange={onConfirmPasswordChange}
            type="password"
            required={true}
            fullscreen={true}
            label="Confirm Password"
            error={confirmPasswordError}
            errorLabel={confirmPasswordErrorLabel}
            id="confirmPassword"
          />
        </div>
      </div>
      {captchaEnabled && (
        <div className={formRowClass}>
          <CaptchaBranding />
          <ReCAPTCHA
            size="invisible"
            badge="bottomleft"
            ref={captchaRef}
            sitekey={captchaSiteKey}
          />
        </div>
      )}
      <div className={formRowClassExtraMargin}>
        <Button
          size="large"
          gradient={true}
          fullscreen={true}
          onClick={onSubmitClicked}
          loading={submitting}
          id="cloud-signup-cta-normal"
        >
          GET STARTED
        </Button>
      </div>
      <p className={buttonLegendClass}>
        Free forever. No credit card required.
      </p>
      {showFormError && (
        <div className={formRowClass}>
          <div className={formErrorLabelClass}>Oops! Something went wrong.</div>
        </div>
      )}
    </div>
  )
}

export default SignUpForm
