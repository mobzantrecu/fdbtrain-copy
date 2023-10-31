import { ReferenceModel, BuilderProps } from '../../types'
import ButtonProps from '../common/Button/types'

export interface IntegrationProps {
  title: string
  additionalTitle: string
  subtitle: string
  button: ButtonProps
  image: any
}

interface IntegrationsReferenceModel extends ReferenceModel {
  value: Omit<ReferenceModel['value'], 'data'> & {
    data: IntegrationProps
  }
}

type IntegrationModelProps = BuilderProps & {
  integrationsModel: IntegrationsReferenceModel
}

export default IntegrationModelProps
