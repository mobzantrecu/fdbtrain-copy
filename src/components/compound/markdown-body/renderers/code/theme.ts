// Extended from 'react-syntax-highlighter/dist/cjs/styles/prism'

const color1 = '#8292a2'
const color2 = '#f8f8f2'
const color3 = '#272822'
const color4 = '#f92672'
const green = '#71CBC2'
const color6 = '#e6db74'
const primary = '#ae81ff'

const theme = {
  'code[class*="language-"]': {
    color: color2,
    background: 'none',
    textShadow: '0 1px rgba(0, 0, 0, 0.3)',
    fontFamily:
      "Roboto Mono, Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    fontSize: '.9rem',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    lineHeight: '1.5',
    MozTabSize: '4',
    OTabSize: '4',
    tabSize: '4',
    WebkitHyphens: 'none',
    MozHyphens: 'none',
    msHyphens: 'none',
    hyphens: 'none'
  },
  'pre[class*="language-"]': {
    color: color2,
    background: color3,
    textShadow: '0 1px rgba(0, 0, 0, 0.3)',
    fontFamily:
      "Roboto Mono, Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    fontSize: '.9rem',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    lineHeight: '1.5',
    MozTabSize: '4',
    OTabSize: '4',
    tabSize: '4',
    WebkitHyphens: 'none',
    MozHyphens: 'none',
    msHyphens: 'none',
    hyphens: 'none',
    padding: '1.25rem',
    margin: '24px 0',
    overflow: 'auto',
    borderRadius: '0.3em'
  },
  ':not(pre) > code[class*="language-"]': {
    background: color3,
    padding: '.1em',
    borderRadius: '.3em',
    whiteSpace: 'normal'
  },
  comment: { color: color1 },
  prolog: { color: color1 },
  doctype: { color: color1 },
  cdata: { color: color1 },
  punctuation: { color: color2 },
  namespace: { Opacity: '.7' },
  property: { color: color4 },
  tag: { color: color4 },
  constant: { color: color4 },
  symbol: { color: color4 },
  deleted: { color: color4 },
  boolean: { color: primary },
  number: { color: primary },
  selector: { color: green },
  'attr-name': { color: green },
  string: { color: green },
  char: { color: green },
  builtin: { color: green },
  inserted: { color: green },
  operator: { color: color2 },
  entity: { color: color2, cursor: 'help' },
  url: { color: color2 },
  '.language-css .token.string': { color: color2 },
  '.style .token.string': { color: color2 },
  variable: { color: color2 },
  atrule: { color: color6 },
  'attr-value': { color: color6 },
  function: { color: color6 },
  'class-name': { color: color6 },
  keyword: { color: '#66d9ef' },
  regex: { color: '#fd971f' },
  important: { color: '#fd971f', fontWeight: 'bold' },
  bold: { fontWeight: 'bold' },
  italic: { fontStyle: 'italic' }
}

export default theme
