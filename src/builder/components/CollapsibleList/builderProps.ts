import BuilderComponentProps from '../../types'

const collapsibleBuilderProps: BuilderComponentProps = {
  name: 'collapsibleModel',
  inputs: [
    {
      name: 'collapsibleModel',
      type: 'reference',
      model: 'collapsible-list'
    }
  ]
}

export default collapsibleBuilderProps
