import BuilderComponentProps from '../../types'

const cardGridBuilderProps: BuilderComponentProps = {
  name: 'cardGrids',
  inputs: [
    {
      name: 'cardGridModel',
      type: 'reference',
      model: 'card-grid'
    }
  ]
}

export default cardGridBuilderProps
