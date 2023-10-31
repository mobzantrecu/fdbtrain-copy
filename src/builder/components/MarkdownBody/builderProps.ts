import BuilderComponentProps from '../../types'

const markdownBodyBuilderProps: BuilderComponentProps = {
  name: 'markdownBody',
  inputs: [
    {
      name: 'text',
      type: 'longText'
    }
  ]
}

export default markdownBodyBuilderProps
