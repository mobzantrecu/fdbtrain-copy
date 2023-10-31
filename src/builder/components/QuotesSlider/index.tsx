import QuoteCard from './QuotesCard/index'
import KeenSliderGrid from '../common/KeenSliderGrid'
import QuoteSliderProps from './types'

const QuoteSlider = (props: QuoteSliderProps) => {
  if (props.quoteGridModel) {
    const { cards } = props.quoteGridModel.value.data
    return (
      <section>
        <KeenSliderGrid
          slidesPerView={[1, 1, 1.41]}
          config={{ centered: true, spacing: 60, initial: 0 }}
          withArrowControls
        >
          {cards.map((item, i) => {
            return <QuoteCard key={i} {...item} />
          })}
        </KeenSliderGrid>
      </section>
    )
  }

  return <h1>Quote Slider</h1>
}

export default QuoteSlider
