type ButtonProps = {
  title: string
  variant: ButtonVariant
  href: string
  target: '_blank' | '_self'
  onClick?: (e: any) => void
}
export type ButtonVariant = 'White' | 'Purple' | 'Link'

export default ButtonProps
