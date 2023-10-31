import { ReferenceModel, BuilderProps } from '../../types'

export interface CollapsibleListProps {
  title: string
  collapsibleList: [
    {
      title: string
      subtitle: string
    }
  ]
}

interface CollapsibleListReferenceModel extends ReferenceModel {
  value: Omit<ReferenceModel['value'], 'data'> & {
    data: CollapsibleListProps
  }
}

type CollapsibleListModelProps = BuilderProps & {
  collapsibleModel: CollapsibleListReferenceModel
}

export default CollapsibleListModelProps
