import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import theme from './theme'

const CodeRenderer = ({ value, language }: any) => (
  <SyntaxHighlighter language={language} style={theme}>
    {value}
  </SyntaxHighlighter>
)

export default CodeRenderer
