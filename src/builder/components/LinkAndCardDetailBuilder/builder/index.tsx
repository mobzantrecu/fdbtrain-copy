import LinkAndCardDetailSection from '../original'
import { LinkAndCardDetailsBuilderProps } from '../types'

const LinkAndCardDetail = (props: LinkAndCardDetailsBuilderProps) => {
  if (props.items) {
    const blocksCollection = { items: props.items }

    return (
      <section>
        <LinkAndCardDetailSection blocksCollection={blocksCollection} />
      </section>
    )
  }

  return <h1>Link And Card Details</h1>
}

export default LinkAndCardDetail
