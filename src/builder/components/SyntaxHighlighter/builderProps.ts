import BuilderComponentProps from '../../types'

const syntaxHighlighterBuilderProps: BuilderComponentProps = {
  name: 'syntax-highlighter',
  inputs: [
    { name: 'code', type: 'longText' },
    { name: 'language', type: 'text' },
    { name: 'color', type: 'color' },
    { name: 'showNumbers', type: 'boolean' },
    { name: 'fontSize', type: 'number' },
    { name: 'theme', type: 'text' }
  ]
}

export default syntaxHighlighterBuilderProps
