import SyntaxHighlighter from 'react-syntax-highlighter'
import Fauna from '../../../components/syntax-highlighter-themes/Fauna'
import SyntaxHighlighterProps from './types'

const ReactSyntaxHighlighter = (props: SyntaxHighlighterProps) => {
  if (props.code) {
    const { code, language, color, showNumbers, fontSize } = props

    return (
      <section style={{ color: color || '#6E6977' }}>
        <SyntaxHighlighter
          language={language || 'js'}
          wrapLines
          wrapLongLines
          style={Fauna}
          showLineNumbers={showNumbers}
          customStyle={{
            background: 'transparent',
            fontSize: fontSize ? `${fontSize}px` : '16px'
          }}
        >
          {code}
        </SyntaxHighlighter>
      </section>
    )
  } else {
    return <h1>SyntaxHighlighter Component</h1>
  }
}

export default ReactSyntaxHighlighter
