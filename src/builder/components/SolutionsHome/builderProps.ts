import BuilderComponentProps from '../../types'

const solutionsHomeBuilderProps: BuilderComponentProps = {
  name: 'solutionsHome',
  inputs: [
    {
      name: 'solutionsHomeModel',
      type: 'reference',
      model: 'solutions-home'
    }
  ]
}

export default solutionsHomeBuilderProps
