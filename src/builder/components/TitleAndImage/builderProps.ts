import BuilderComponentProps from '../../types'

const titleAndImageBuilderProps: BuilderComponentProps = {
  name: 'titleAndImage',
  inputs: [
    {
      name: 'titleAndImageModel',
      type: 'reference',
      model: 'title-and-image'
    }
  ]
}

export default titleAndImageBuilderProps
