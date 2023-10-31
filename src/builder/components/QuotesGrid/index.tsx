import SectionLayout from '../common/SectionLayout/SectionLayout'
import SubtitleComponent from '../common/Subtitle'
import TitleComponent from '../common/Title'
import CardComponent from './QuoteCardComponent'
import quoteGridStyles from './quoteGrid.module.css'
import QuoteGridProps from './types'

const QuoteGrid = (props: QuoteGridProps) => {
  if (props.quoteGridModel) {
    const { title, subtitle, cards } = props.quoteGridModel.value.data
    return (
      <SectionLayout>
        <TitleComponent
          layoutComponentClasses={quoteGridStyles.title}
          text={title}
        />
        <SubtitleComponent
          layoutComponentClasses={quoteGridStyles.subtitle}
          text={subtitle}
        />
        <div className={quoteGridStyles.cardGrid}>
          {cards.map((card, i) => {
            return <CardComponent key={i} {...card} />
          })}
        </div>
      </SectionLayout>
    )
  }

  return <h1>Quote Grid Component</h1>
}

export default QuoteGrid
