import BuilderComponentProps from '../../types'

const logoListBuilderProps: BuilderComponentProps = {
  name: 'logoList',
  inputs: [
    {
      name: 'logoListModel',
      type: 'reference',
      model: 'logo-list'
    }
  ]
}

export default logoListBuilderProps
