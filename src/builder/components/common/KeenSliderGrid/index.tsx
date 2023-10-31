import { useKeenSlider } from 'keen-slider/react'
import { TOptionsEvents } from 'keen-slider'
import { Children, isValidElement, useMemo, useState } from 'react'
import keenSliderStyle from './keen-slider-grid.module.css'
import { theme } from '../constants'

type Props = {
  config?: Omit<TOptionsEvents, 'slidesPerView' | 'breakpoints'>
  withArrowControls?: boolean
  slidesPerView?: number | number[]
}

const KeenSliderGrid: React.FC<Props> = ({
  children,
  config,
  withArrowControls = false,
  slidesPerView
}) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const breakpoints = useMemo(() => {
    if (!Array.isArray(slidesPerView)) return
    const br: Record<string, { slidesPerView: number }> = {}
    slidesPerView.forEach((n, i) => {
      br[`(min-width: ${theme.breakpoints[i]})`] = { slidesPerView: n }
    })
    return br
  }, [slidesPerView])

  const [sliderRef, slider] = useKeenSlider({
    breakpoints,
    slidesPerView: Array.isArray(slidesPerView)
      ? slidesPerView[0]
      : slidesPerView,
    duration: 1000,
    spacing: 20,
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
    ...config
  })

  return (
    <>
      <section
        className={`${keenSliderStyle.container} keen-slider`}
        ref={sliderRef as React.RefObject<HTMLDivElement>}
        style={{
          position: 'relative',
          overflow: 'visible',
          width: '90%',
          margin: 'auto'
        }}
      >
        {Children.map(children, (child) => {
          if (isValidElement(child)) {
            return {
              ...child,
              props: {
                ...child.props,
                className: `${
                  child.props.className ? `${child.props.className} ` : ''
                }keen-slider__slide`
              }
            }
          }
          return child
        })}
      </section>
      {slider && withArrowControls && (
        <section
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '18px'
          }}
        >
          <button
            aria-label="go back"
            className={keenSliderStyle.sliderButton}
            onClick={slider?.prev}
          >
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <div style={{ display: 'flex' }}>
            {[...Array(slider.details().size).keys()].map((idx) => {
              return (
                <button
                  aria-label={`relative ${idx}`}
                  key={idx}
                  onClick={() => {
                    slider.moveToSlideRelative(idx)
                  }}
                  className={keenSliderStyle.buttons}
                  style={{
                    width: '12px',
                    height: '12px',
                    background: currentSlide === idx ? '#6742F1' : '#f9f9f9',
                    border:
                      currentSlide === idx ? '#f9f9f9' : '2px solid #604BE9',
                    borderRadius: '50%',
                    marginRight: '4px',
                    marginLeft: '4px'
                  }}
                />
              )
            })}
          </div>
          <button
            aria-label="go forward"
            className={keenSliderStyle.sliderButton}
            onClick={slider?.next}
          >
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </section>
      )}
    </>
  )
}

export default KeenSliderGrid
