import { BuilderProps } from '../../types'

export type Tab = {
  disabled: boolean
  code: string
  language: string
  name: string
  tabButtonColor: string
  tabButtonBorder: string
  tabButtonFontColor: string
  theme: string
}

type CodeBlockProps = BuilderProps & {
  tabs: Tab[]
}

export default CodeBlockProps
