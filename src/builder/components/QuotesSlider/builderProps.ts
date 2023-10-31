import BuilderComponentProps from '../../types'

const quoteSliderBuilderProps: BuilderComponentProps = {
  name: 'quoteSlider',
  inputs: [
    {
      name: 'quoteGridModel',
      type: 'reference',
      model: 'quotes-grid'
    }
  ]
}

export default quoteSliderBuilderProps
