import { ReferenceModel, BuilderProps } from '../../types'
import { FormProps } from '../common/Form/types'

export interface SolutionsFormProps {
  title: string
  subtitle: string
  form: FormProps
}

interface SolutionsFormReferenceModel extends ReferenceModel {
  value: Omit<ReferenceModel['value'], 'data'> & {
    data: SolutionsFormProps
  }
}

type SolutionsFormModelProps = BuilderProps & {
  solutionsFormModel: SolutionsFormReferenceModel
}

export default SolutionsFormModelProps
