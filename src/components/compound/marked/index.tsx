import clsx from 'clsx'
import marked, { MarkedOptions } from 'marked'
import { useMemo } from 'react'

import s from './marked.module.scss'

const defaultRenderer = new marked.Renderer()

type Renderer = Partial<MarkedOptions['renderer']>

type Props = {
  children: string
  className?: string
  noDefaultStyles?: boolean
  options?: Omit<MarkedOptions, 'renderer'> & { renderer?: Renderer }
}

const Marked = ({ children, className, noDefaultStyles, options }: Props) => {
  const html = useMemo(() => {
    const { renderer, ...restOptions } = options ?? {}
    if (renderer) {
      // @ts-ignore
      Object.keys(renderer).map((key) => (defaultRenderer[key] = renderer[key]))
    }
    return marked(children, restOptions)
  }, [children, options])

  return (
    <div
      className={clsx(className, { [s.markdown]: !noDefaultStyles })}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

export default Marked
