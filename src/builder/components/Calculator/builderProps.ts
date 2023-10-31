import BuilderComponentProps from '../../types'

const calculatorBuilderProps: BuilderComponentProps = {
  name: 'calculator',
  inputs: [
    {
      name: 'calculatorModel',
      type: 'reference',
      model: 'calculator'
    }
  ]
}

export default calculatorBuilderProps
