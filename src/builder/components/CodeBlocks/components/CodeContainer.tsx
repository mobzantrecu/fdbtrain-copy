// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
React
import codeContainerStyles from './codeContainer.module.css'
import SyntaxHighlighter from 'react-syntax-highlighter'
import * as syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/hljs'
const { anOldHope } = syntaxStyle as any

type CodeContainerProps = {
  code: string
  language: string
  styles?: {
    borderRight?: string
    borderLeft?: string
    maxHeight?: string
  }
}

const CodeContainer = ({ code, language, styles }: CodeContainerProps) => {
  return (
    <div className={codeContainerStyles.container} style={styles}>
      <SyntaxHighlighter
        language={language}
        wrapLines
        wrapLongLines
        style={anOldHope}
        customStyle={{ background: 'transparent', fontSize: '12px' }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
}

export default CodeContainer
