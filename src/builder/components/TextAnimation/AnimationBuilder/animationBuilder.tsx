import animationStyles from './animationBuilder.module.css'
import { Animation } from '../types'

interface IAnimationBuilder {
  getEnhancedText(animation?: Animation): JSX.Element[]
}

class AnimationBuilder implements IAnimationBuilder {
  private animations = {
    fly: animationStyles.fly
  }
  text: string
  color: string

  constructor(text: string, color: string) {
    this.text = text
    this.color = color
  }

  getEnhancedText = (animation?: Animation) => {
    const textArr = this.text.split('')
    const selectedAnimation = animation ? this.animations[animation] : ''

    const spanArray = textArr.map((letter, i) => {
      return (
        <span
          key={i}
          id={`span-${i}`}
          style={{
            color: this.color,
            animationDelay: `0.${letter.length - i + 1}s`,
            display: 'inline-block'
          }}
          className={`${animationStyles.animation} ${selectedAnimation} ${animationStyles.text}`}
        >
          {letter}
        </span>
      )
    })

    return spanArray
  }
}

export default AnimationBuilder
