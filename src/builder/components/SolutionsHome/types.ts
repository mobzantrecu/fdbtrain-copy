import { ReferenceModel, BuilderProps } from '../../types'
import ButtonProps from '../common/Button/types'

export interface SolutionsHomeProps {
  title: string
  subtitle: string
  buttons: {
    button: ButtonProps
  }[]
  image: any
}

interface SectionHomeReferenceModel extends ReferenceModel {
  value: Omit<ReferenceModel['value'], 'data'> & {
    data: SolutionsHomeProps
  }
}

type SolutionsHomeModelProps = BuilderProps & {
  solutionsHomeModel: SectionHomeReferenceModel
}

export default SolutionsHomeModelProps

// public/images/backgrounds/dark-light-curve-no-blue.png
