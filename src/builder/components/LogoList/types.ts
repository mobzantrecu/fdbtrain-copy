import { ReferenceModel, BuilderProps } from '../../types'

export interface LogoListProps {
  logos: [
    {
      image: string
    }
  ]
}

interface LogoListReferenceModel extends ReferenceModel {
  value: Omit<ReferenceModel['value'], 'data'> & {
    data: LogoListProps
  }
}

type LogoListModelProps = BuilderProps & {
  logoListModel: LogoListReferenceModel
}

export default LogoListModelProps
