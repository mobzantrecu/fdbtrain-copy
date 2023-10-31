import BuilderComponentProps from '../../types'

const linkAndCardDetailsBuilderProps: BuilderComponentProps = {
  name: 'linkAndCardDetails',
  inputs: [
    {
      name: 'items',
      type: 'list',
      subFields: [
        {
          name: 'title',
          type: 'richText'
        },
        {
          name: 'linkTitle',
          type: 'text'
        },
        {
          name: 'icon',
          type: 'text'
        },
        {
          name: 'subtitle',
          type: 'richText'
        },
        {
          name: 'backgroundImage',
          type: 'file'
        }
      ]
    }
  ]
}

export default linkAndCardDetailsBuilderProps
