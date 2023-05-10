import { useRef, useState } from 'react'

const Form001 = () => {
  const [errors, setErrors] = useState<Map<string, any>>(new Map())
  const form = useRef<HTMLFormElement>()

  const email = useRef<HTMLInputElement>()
  const firstName = useRef<HTMLInputElement>()
  const lastName = useRef<HTMLInputElement>()
  const companyName = useRef<HTMLInputElement>()

  const fieldIsRequiredMessage = 'Field is required'

  const checkIfHasValue = (value?: string) => {
    return !!value
  }

  const checkEmail = (value?: string) => {
    if (!value) {
      errors.set('email', fieldIsRequiredMessage)
      email.current?.classList.add('error')
    } else {
      if (value && !value.toLowerCase().match(/^\S+@\S+\.\S+$/)) {
        errors.set('email', 'Email is not valid')
        email.current?.classList.add('error')
      } else {
        errors.delete('email')
        email.current?.classList.remove('error')
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
    return (
      <label className="label error-message" htmlFor="firstName">
        {value}
      </label>
    )
  }

  const submit = (e: MouseEvent) => {
    e.preventDefault()
    const emailValue = email.current?.value
    const companyNameValue = companyName.current?.value || ''

    checkEmail(emailValue)

    addErrorIfExists('companyName', companyNameValue, companyName.current)

    if (form && errors.size === 0) {
      form.current?.submit()
    }
  }

  return (
    <div className="container">
      <div className="legacy title-container">
        <h3 style={{ textAlign: 'center' }} className="legacy title">
          Get in touch with Fauna
        </h3>
      </div>

      <form
        ref={form as any}
        action="https://www2.fauna.com/l/517431/2023-01-11/7mvptg?success_location=https://go.fauna.com/contact-us-thank-you"
        method="post"
        className="form"
      >
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
        <div className="input-container">
          <label className="legacy input-label" htmlFor="email">
            Work email
            <sup>&nbsp;*</sup>
          </label>
          <input ref={email as any} className="input" name="Work email" />
          <div className="error-label-container">
            {getErrorComponent(errors.get('email'))}
          </div>
          <div className="two-inputs-container">
            <div>
              <label className="legacy input-label" htmlFor="firstName">
                First name
              </label>
              <input
                ref={firstName as any}
                className="input"
                id="firstName"
                type="text"
                name="First name"
              />
              <div className="error-label-container">
                {getErrorComponent(errors.get('firstName'))}
              </div>
            </div>
            <div>
              <label className="legacy input-label" htmlFor="email">
                Last name
              </label>
              <input
                ref={lastName as any}
                className="input"
                id="lastName"
                type="text"
                name="lastName"
              />
              <div className="error-label-container">
                {getErrorComponent(errors.get('lastName'))}
              </div>
            </div>
          </div>

          <label className="legacy input-label" htmlFor="companyName">
            Company name
            <sup>&nbsp;*</sup>
          </label>
          <input
            ref={companyName as any}
            className="input"
            type="text"
            name="companyName"
          />
          <div className="error-label-container">
            {getErrorComponent(errors.get('companyName'))}
          </div>
        </div>
        <div className="buttons-container">
          <button
            className="legacy button primary large gradient fullscreen"
            onClick={(e) => submit((e as unknown) as MouseEvent)}
          >
            CONTACT US
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form001
