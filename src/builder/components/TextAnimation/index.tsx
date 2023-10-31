import { useEffect, useState } from 'react'
import AnimationBuilder from './AnimationBuilder/animationBuilder'
import { TextAnimationProps } from './types'

const TextAnimationBuilder = (props: TextAnimationProps) => {
  const [enhancedText, setEnhancedText] = useState('' as any)
  const [normalText, setNormalText] = useState('' as any)
  const [animating, setAnimating] = useState(false)

  if (props.text) {
    const { text, color, animationType } = props

    useEffect(() => {
      const animationBuilder = new AnimationBuilder(text, color)

      const newText = animationBuilder.getEnhancedText()
      setNormalText([...newText])

      const newEnhancedText = animationBuilder.getEnhancedText(animationType)
      setEnhancedText([...newEnhancedText])

      setAnimating(true)
    }, [])

    const builderState = (props as any)?.builderState?.state?.deviceSize
    const responsibleStyles = (props as any)?.builderBlock?.responsiveStyles
    const styles = responsibleStyles[builderState]
    const fontSize = styles?.fontSize || ''

    useEffect(() => {
      const animationBuilder = new AnimationBuilder(text, color)

      const interval = setInterval(() => {
        if (animating) {
          setAnimating(false)
          setEnhancedText(null)
        } else {
          const newEnhancedText = animationBuilder.getEnhancedText(
            animationType
          )
          setEnhancedText([...newEnhancedText])
          setAnimating(true)
        }
      }, 4000)
      return () => {
        clearInterval(interval)
      }
    }, [animationType, enhancedText])

    return (
      <section style={{ fontSize: `${fontSize}px` }}>
        {animating ? enhancedText : normalText}
      </section>
    )
  }

  return <h1>Text animation</h1>
}

export default TextAnimationBuilder
