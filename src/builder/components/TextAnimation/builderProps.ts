import BuilderComponentProps from '../../types'

const textAnimationBuilderProps: BuilderComponentProps = {
  name: 'textAnimation',
  inputs: [
    {
      name: 'color',
      type: 'color',
      defaultValue: '#896BFF'
    },
    {
      name: 'text',
      type: 'text',
      defaultValue: 'fly'
    },
    {
      name: 'animationType',
      type: 'text',
      defaultValue: 'fly'
    }
  ]
}

export default textAnimationBuilderProps
