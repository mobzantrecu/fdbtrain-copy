import { ReferenceModel, BuilderProps } from '../../types'

export interface Data {
  cards: CardProps[]
  subtitle: string
  title: string
}

export interface CardProps {
  subtitle: string
  link: Link
  title: string
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

type CardGridProps = BuilderProps & { cardGridModel: CardGridReferenceModel }

export default CardGridProps
