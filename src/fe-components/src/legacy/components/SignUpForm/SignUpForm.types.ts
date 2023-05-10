export interface PropTypes {
  apiUrl: string
  dashboardUrl: string
  captchaSiteKey?: string
  captchaEnabled?: boolean
  githubSignUpEnabled?: boolean
  netlifySignUpEnabled?: boolean
  backgroundTheme?: 'primary' | 'secondary'
  showFormError?: boolean
  onSubmit: (
    email: string,
    password: string,
    captchaToken?: string | null | undefined
  ) => Promise<void>
}
