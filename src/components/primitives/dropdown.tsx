/** @jsx jsx */
import { keyframes } from '@emotion/core'
import useLifecycleId from 'hooks/use-lifecycle-id'
import theme from 'lib/theme'
import { useCallback, useEffect, useState } from 'react'
import { Box, jsx, SxStyleProp } from 'theme-ui'
import Popper, { PopperProps } from './popper'

const dropdownFadeInKeyframe = keyframes({
  from: { opacity: 0, transform: 'translateX(16px)' },
  to: { opacity: 1, transform: 'translateX(0px)' }
})

export type DropdownProps = PopperProps & {
  isOpen: boolean
  width?: string
  close: () => void
  pushSx?: SxStyleProp
  offsetX?: number | undefined
  offsetY?: number
}

const Dropdown: React.FC<DropdownProps> = ({
  children,
  isOpen,
  close,
  pushSx,
  ...popperProps
}) => {
  const dropdownId = useLifecycleId()

  const handleClick = useCallback(
    (e: any) => {
      const isInside =
        e?.target?.closest(`[data-component-id='${dropdownId}']`) !== null
      if (isInside) return
      close()
      document.removeEventListener('click', handleClick)
    },
    [close, dropdownId]
  )

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleClick)
      return () => document.removeEventListener('click', handleClick)
    }
  }, [close, handleClick, isOpen])

  if (!isOpen) return null
  return (
    <Popper
      {...popperProps}
      data-component-id={dropdownId}
      options={{
        strategy: 'fixed',
        placement: 'bottom-start',
        ...popperProps.options
      }}
      style={{ zIndex: theme.zIndices.dropdown, ...popperProps.style }}
    >
      <Box
        sx={{
          opacity: 0,
          animation: `.1s ${dropdownFadeInKeyframe} forwards cubic-bezier(.4,0,.2,1)`,
          zIndex: 'dropdown',
          overflow: 'auto',
          variant: 'cards.primary',
          p: 3,
          '&:focus': { outline: 'none' },
          boxShadow: 'cardInteractive',
          ...pushSx
        }}
      >
        {children}
      </Box>
    </Popper>
  )
}

const useDropdown = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  return { isOpen, open, close }
}

export default Dropdown
export { useDropdown }
