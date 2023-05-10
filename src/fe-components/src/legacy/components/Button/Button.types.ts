export interface PropTypes {
  id?: string
  children: any
  onClick?: () => void
  image?: any
  theme?: 'primary' | 'secondary' | 'netlify' | 'github'
  size?: 'small' | 'medium' | 'large'
  gradient?: boolean
  fullscreen?: boolean
  loading?: boolean
  disabled?: boolean
}
