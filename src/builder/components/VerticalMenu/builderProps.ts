import BuilderComponentProps from '../../types'

const verticalMenuBuilderProps: BuilderComponentProps = {
  name: 'verticalMenu',
  inputs: [
    { name: 'contentId', type: 'text' },

    {
      name: 'items',
      type: 'list',
      subFields: [
        { name: 'id', type: 'text' },
        { name: 'label', type: 'text' }
      ]
    }
  ]
}

export default verticalMenuBuilderProps
