import { gsap } from 'gsap'
import { DrawSVGPlugin } from 'gsap/dist/DrawSVGPlugin'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(DrawSVGPlugin)

const GOLDEN_RATIO = (1 + Math.sqrt(5)) / 2
const RECIPROCAL_GR = 1 / GOLDEN_RATIO
const DURATION = RECIPROCAL_GR * 3
const STAGGER = DURATION / 3

const getDelay = (value: number) => {
  if (value === 0) return value
  return DURATION / value
}

const useLinesAnimation = (selector = '.path') => {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current) return

    const paths = svgRef.current.querySelectorAll(selector)

    const timelines: gsap.core.Timeline[] = []

    paths.forEach((el, index) => {
      const tl = gsap.timeline({
        delay: getDelay(index),
        repeat: -1,
        repeatDelay: STAGGER,
        repeatRefresh: true,
        defaults: {
          duration: DURATION,
          ease: 'slow(0.3, 0.4, false)'
        }
      })

      tl.fromTo(
        el,
        {
          attr: {
            x1: 'random(30, 400, 32)',
            x2: 'random(600, 1000, 16)'
          },
          autoAlpha: 0,
          drawSVG: '0%',
          xPercent: 'random(-500, -100, 80)'
        },
        {
          autoAlpha: 1,
          drawSVG: '100%',
          xPercent: 'random(500, 200, 100)'
        }
      )
      tl.to(
        el,
        {
          duration: DURATION / 2,
          autoAlpha: 0
        },
        `>-0.1`
      )
      timelines.push(tl)
    })

    return () => {
      timelines.forEach((tl) => tl.clear())
    }
  }, [svgRef, selector])

  return svgRef
}

export { useLinesAnimation }
