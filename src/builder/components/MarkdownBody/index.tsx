import MarkdownBody from '../../../components/compound/markdown-body'
import { MarkdownBodyProps } from './types'

const MarkdownBodyBuilder = (props: MarkdownBodyProps) => {
  if (props.text) {
    const { text } = props

    return (
      <section>
        <MarkdownBody source={text ?? ''} />
      </section>
    )
  }

  return <h1>Markdown Body</h1>
}

export default MarkdownBodyBuilder
