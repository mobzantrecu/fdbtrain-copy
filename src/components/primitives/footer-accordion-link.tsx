/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
React

import { Box, jsx, SxStyleProp } from 'theme-ui'
import { useCallback, useRef } from 'react'
import { DropdownLinkFragment } from 'lib/contentful/generated'
import { useDropdown } from './dropdown'
import Link from './link'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

type Props = DropdownLinkFragment & {
  pushSx?: SxStyleProp
  pushLinkSx?: SxStyleProp
}

const FooterAccordionLink = ({
  children,
  dropdownLinksCollection,
  pushSx,
  pushLinkSx
}: Props) => {
  const { isOpen, open, close } = useDropdown()
  const anchorRef = useRef<HTMLDivElement>(null)

  const handleClick = useCallback(() => {
    if (!isOpen) open()
    else close()
  }, [close, isOpen, open])

  return (
    <div sx={pushSx}>
      <Box
        as="button"
        aria-label="open accordion"
        sx={
          {
            userSelect: 'none',
            cursor: 'default',
            display: 'inline-flex',
            alignItems: 'center',
            '&:focus': { color: 'primary', outline: 'none' }
          } as any
        }
        ref={anchorRef}
        onClick={handleClick}
      >
        {children}{' '}
        <i sx={{ pl: 2 }}>{isOpen ? <FiChevronUp /> : <FiChevronDown />}</i>
      </Box>
      {isOpen && (
        <div>
          {dropdownLinksCollection?.items.map((link) => (
            <Link
              key={link?.children as any}
              {...link}
              icon={null}
              sx={{
                display: 'flex',
                alignItems: 'center',
                height: '40px',
                transition: 'opacity .15s',
                fontSize: 2,
                ...pushLinkSx
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default FooterAccordionLink
