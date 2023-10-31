import BuilderComponentProps from '../../types'

const codeBlockBuilderProps: BuilderComponentProps = {
  name: 'code-blocks',
  inputs: [
    {
      name: 'buttonContainerStyles',
      type: 'object',
      subFields: [
        { name: 'background', type: 'text' },
        { name: 'mode', type: 'text' }
      ]
    },
    {
      name: 'tabs',
      type: 'list',
      subFields: [
        { name: 'code', type: 'longText' },
        { name: 'language', type: 'text' },
        { name: 'name', type: 'text' },
        { name: 'description', type: 'longText' },
        { name: 'descriptionOnTheRight', type: 'boolean' },
        { name: 'descriptionIsCode', type: 'boolean' }
      ]
    }
  ]
}

export default codeBlockBuilderProps
