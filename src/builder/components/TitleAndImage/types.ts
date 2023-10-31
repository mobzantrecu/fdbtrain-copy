import { ReferenceModel, BuilderProps } from '../../types'

export interface TitleAndImageProps {
  title: string
  subtitle: string
  image: {
    height: number
    width: number
    image: string
  }
}

interface TitleAndImageReferenceModel extends ReferenceModel {
  value: Omit<ReferenceModel['value'], 'data'> & {
    data: TitleAndImageProps
  }
}

type TitleAndImageModelProps = BuilderProps & {
  titleAndImageModel: TitleAndImageReferenceModel
}

export default TitleAndImageModelProps
