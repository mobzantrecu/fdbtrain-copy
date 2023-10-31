import BuilderComponentProps from '../../types'

const integrationsBuilderProps: BuilderComponentProps = {
  name: 'integrations',
  inputs: [
    {
      name: 'integrationsModel',
      type: 'reference',
      model: 'integrations'
    }
  ]
}

export default integrationsBuilderProps
