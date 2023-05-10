import { createPopper, Modifier, Options } from '@popperjs/core'
import Portal from 'components/primitives/portal'
import { useRef } from 'react'
import { usePopper } from 'react-popper'

type PopperOptions = Omit<Partial<Options>, 'modifiers'> & {
  createPopper?: typeof createPopper
  modifiers?: Partial<Modifier<unknown, Record<string, unknown>>>[]
}

export type PopperProps = {
  children?: React.ReactNode
  options?: PopperOptions
  offset?: number | string
  offsetX?: number | string
  offsetY?: number | string
  marginTop?: number | string
} & React.ComponentPropsWithoutRef<'div'>

const Popper = ({
  children,
  options,
  offset,
  offsetX,
  offsetY,
  marginTop,
  ...moreProps
}: PopperProps) => {
  const popperElementRef = useRef<HTMLDivElement>(null)

  const { styles, attributes } = usePopper(
    null,
    popperElementRef.current,
    options
  )

  return (
    <Portal>
      <div
        {...moreProps}
        ref={popperElementRef}
        style={{
          ...styles.popper,
          paddingTop: offsetY ?? offset,
          paddingRight: offsetX ?? offset,
          paddingBottom: offsetY ?? offset,
          paddingLeft: offsetX ?? offset,
          ...moreProps.style,
          left: '50%',
          transform: 'translateX(-50%)',
          marginTop: marginTop
        }}
        {...attributes.popper}
      >
        {children}
      </div>
    </Portal>
  )
}

export default Popper
