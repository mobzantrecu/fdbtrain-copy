import SectionLayout from '../common/SectionLayout/SectionLayout'
import SubtitleComponent from '../common/Subtitle'
import TitleComponent from '../common/Title'
import CardComponent from './CardComponent/CardComponent'
import cardGridStyles from './cardGrid.module.css'
import CardGridProps from './types'

const CardGrid = (props: CardGridProps) => {
  if (props.cardGridModel) {
    const { title, subtitle, cards } = props.cardGridModel.value.data
    return (
      <SectionLayout layoutComponentClasses={cardGridStyles.sectionLayout}>
        <div>
          <TitleComponent
            layoutComponentClasses={cardGridStyles.title}
            text={title}
          />
          <SubtitleComponent
            layoutComponentClasses={cardGridStyles.subtitle}
            text={subtitle}
          />
          <div className={cardGridStyles.cardGrid}>
            {cards.map((card, i) => {
              return <CardComponent key={i} {...card} />
            })}
          </div>
        </div>
      </SectionLayout>
    )
  }

  return <h1>Card Grid Component</h1>
}

export default CardGrid
