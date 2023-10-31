import SectionLayout from '../common/SectionLayout/SectionLayout'
import CardGridProps from './types'
import threeCardRowStyles from './threeCardRow.module.css'
import TitleComponent from '../common/Title'
import CardComponent from './CardComponent'

const ThreeCardRow = (props: CardGridProps) => {
  if (props.threeCardRowModel) {
    const { title, cards } = props.threeCardRowModel.value.data

    return (
      <SectionLayout layoutComponentClasses={threeCardRowStyles.sectionLayout}>
        <TitleComponent
          layoutComponentClasses={threeCardRowStyles.title}
          text={title}
        />

        <div className={threeCardRowStyles.cardGrid}>
          {cards.map((card, i) => {
            return <CardComponent key={i} {...card} />
          })}
        </div>
      </SectionLayout>
    )
  }

  return <h1>Three Card Row</h1>
}

export default ThreeCardRow
