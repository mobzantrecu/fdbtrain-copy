import { ReferenceModel, BuilderProps } from '../../types'

export interface Data {
  cards: CardProps[]
  title: string
}

export interface CardProps {
  subtitle: string
  icon: {
    width: number
    height: number
    image: string
  }
  title: string
}

interface CardGridReferenceModel extends ReferenceModel {
  value: Omit<ReferenceModel['value'], 'data'> & {
    data: Data
  }
}

type CardGridProps = BuilderProps & {
  threeCardRowModel: CardGridReferenceModel
}

export default CardGridProps
