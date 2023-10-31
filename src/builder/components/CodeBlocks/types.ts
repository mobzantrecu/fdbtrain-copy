import { BuilderProps } from '../../types'

export type Tab = {
  code: string
  language: string
  name: string
  description: string
  descriptionOnTheRight: boolean
  descriptionIsCode: boolean
}

type CodeBlockProps = BuilderProps & {
  tabs: Tab[]
  buttonContainerStyles: {
    background: string
    mode: 'light' | 'dark'
  }
}

export default CodeBlockProps
