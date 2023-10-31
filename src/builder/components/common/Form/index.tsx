import { MouseEventHandler, useRef, useState } from 'react'
import { FormProps } from './types'
import formStyles from './form.module.css'
import getButton from '../Button/utils'

const Form = ({ submitUrl, button }: FormProps) => {
  const [errors, setErrors] = useState<Map<string, any>>(new Map())
  const form = useRef<HTMLFormElement>()

  const workEmail = useRef<HTMLInputElement>()
  const firstName = useRef<HTMLInputElement>()
  const lastName = useRef<HTMLInputElement>()
  const companyName = useRef<HTMLInputElement>()
  const jobTitle = useRef<HTMLInputElement>()

  const fieldIsRequiredMessage = 'Field is required'

  const checkIfHasValue = (value?: string) => {
    return !!value
  }

  const checkEmail = (value?: string) => {
    if (!value) {
      errors.set('workEmail', fieldIsRequiredMessage)
      workEmail.current?.classList.add('error')
    } else {
      if (value && !value.toLowerCase().match(/^\S+@\S+\.\S+$/)) {
        errors.set('workEmail', 'Email is not valid')
        workEmail.current?.classList.add('error')
      } else {
        errors.delete('workEmail')
        workEmail.current?.classList.remove('error')
      }
    }
    setErrors(new Map(errors))
  }

  const addErrorIfExists = (key: string, value: string, ref: any) => {
    if (!checkIfHasValue(value)) {
      errors.set(key, fieldIsRequiredMessage)
      ref.classList.add('error')
    } else {
      errors.delete(key)
      ref.classList.remove('error')
    }
    setErrors(new Map(errors))
  }

  const getErrorComponent = (value: string) => {
    return <label className="label error-message">{value}</label>
  }

  const submit = (e: MouseEvent) => {
    e.preventDefault()
    const emailValue = workEmail.current?.value
    const firstNameValue = firstName.current?.value || ''
    const lastNameValue = lastName.current?.value || ''

    checkEmail(emailValue)

    addErrorIfExists('firstName', firstNameValue, firstName.current)
    addErrorIfExists('lastName', lastNameValue, lastName.current)

    if (form && errors.size === 0) {
      form.current?.submit()
    }
  }

  return (
    <div className={formStyles.container}>
      <form ref={form as any} action={submitUrl} method="post" className="form">
        <input
          type="hidden"
          id="utm source"
          name="utm source"
          value="utm source test value"
        />
        <input
          type="hidden"
          id="utm medium"
          name="utm medium"
          value="utm medium test value"
        />
        <input
          type="hidden"
          id="utm campaign"
          name="utm campaign"
          value="utm campaign test value"
        />
        <div className={formStyles.twoInputsContainer}>
          <div className={formStyles.inputContainer}>
            <label className={formStyles.inputLabel} htmlFor="firstName">
              First name
              <sup>&nbsp;*</sup>
            </label>
            <input
              ref={firstName as any}
              className={formStyles.input}
              id="firstName"
              placeholder="First name"
              type="text"
              name="First name"
            />
            <div className="error-label-container">
              {getErrorComponent(errors.get('firstName'))}
            </div>
          </div>
          <div className={formStyles.inputContainer}>
            <label className={formStyles.inputLabel} htmlFor="lastName">
              Last name
              <sup>&nbsp;*</sup>
            </label>
            <input
              ref={lastName as any}
              className={formStyles.input}
              placeholder="Last name"
              id="lastName"
              type="text"
              name="Last name"
            />
            <div className="error-label-container">
              {getErrorComponent(errors.get('lastName'))}
            </div>
          </div>
        </div>
        <div className={formStyles.twoInputsContainer}>
          <div className={formStyles.inputContainer}>
            <label className={formStyles.inputLabel} htmlFor="companyName">
              Company name
            </label>
            <input
              ref={companyName as any}
              placeholder="Company name"
              className={formStyles.input}
              id="companyName"
              type="text"
              name="Company name"
            />
            <div className="error-label-container">
              {getErrorComponent(errors.get('companyName'))}
            </div>
          </div>
          <div className={formStyles.inputContainer}>
            <label className={formStyles.inputLabel} htmlFor="jobTitle">
              Job title
            </label>
            <input
              ref={jobTitle as any}
              className={formStyles.input}
              placeholder="Job title"
              id="jobTitle"
              type="text"
              name="Job title"
            />
            <div className="error-label-container">
              {getErrorComponent(errors.get('jobTitle'))}
            </div>
          </div>
        </div>

        <div className={formStyles.inputContainer}>
          <label className={formStyles.inputLabel} htmlFor="workEmail">
            Work email
            <sup>&nbsp;*</sup>
          </label>
          <input
            ref={workEmail as any}
            className={formStyles.input}
            placeholder="Work email"
            id="workEmail"
            type="text"
            name="Work email"
          />
          <div className="error-label-container">
            {getErrorComponent(errors.get('workEmail'))}
          </div>
        </div>

        <div style={{ marginTop: 20 }}>
          {getButton({
            ...button,
            onClick: (e: MouseEventHandler<HTMLAnchorElement>) =>
              submit((e as unknown) as MouseEvent)
          })}
        </div>
      </form>
    </div>
  )
}

export default Form
