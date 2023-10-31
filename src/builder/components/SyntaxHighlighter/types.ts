import { BuilderProps } from '../../types'

type SyntaxHighlighterProps = BuilderProps & {
  code: string
  language: string
  color: string
  showNumbers: boolean
  fontSize: number
  theme: string
}

export default SyntaxHighlighterProps
