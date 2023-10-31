import BuilderComponentProps from '../../types'

const newCodeBlockBuilderProps: BuilderComponentProps = {
  name: 'new-code-blocks',
  inputs: [
    {
      name: 'tabs',
      type: 'list',
      subFields: [
        { name: 'code', type: 'longText' },
        { name: 'language', type: 'text' },
        { name: 'name', type: 'text' },
        { name: 'tabButtonColor', type: 'color' },
        { name: 'tabButtonFontColor', type: 'color' },
        { name: 'tabButtonBorder', type: 'text' },
        { name: 'theme', type: 'text' },
        { name: 'disabled', type: 'boolean' }
      ]
    }
  ]
}

export default newCodeBlockBuilderProps
