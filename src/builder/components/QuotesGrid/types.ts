import { ReferenceModel, BuilderProps } from '../../types'

export interface Data {
  cards: CardProps[]
  subtitle: string
  title: string
}

export interface CardProps {
  text: string
  image: {
    width: number
    height: number
    image: string
  }
  author: string
  className?: string
}

export interface Link {
  href: string
  title: string
  target: string
}

interface CardGridReferenceModel extends ReferenceModel {
  value: Omit<ReferenceModel['value'], 'data'> & {
    data: Data
  }
}

type CardGridProps = BuilderProps & { quoteGridModel: CardGridReferenceModel }

export default CardGridProps
