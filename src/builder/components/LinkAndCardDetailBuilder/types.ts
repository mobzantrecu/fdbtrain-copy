export type Items = {
  title: string
  linkTitle: string
  icon: string
  subtitle: string
  backgroundImage: string
}

export type LinkAndCardDetailSectionProps = {
  blocksCollection: {
    items: Items[]
  }
}

export type LinkAndCardDetailsBuilderProps = {
  items: Items[]
}
