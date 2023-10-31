import BuilderComponentProps from '../../types'

const quoteGridBuilderProps: BuilderComponentProps = {
  name: 'quoteGrids',
  inputs: [
    {
      name: 'quoteGridModel',
      type: 'reference',
      model: 'quotes-grid'
    }
  ]
}

export default quoteGridBuilderProps
