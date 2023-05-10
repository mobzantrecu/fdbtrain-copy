/** @jsx jsx */
import { Box, jsx, SxStyleProp, Text } from 'theme-ui'
import { useCallback, useRef } from 'react'
import { DropdownLinkFragment, LinkFragment } from 'lib/contentful/generated'
import { useDropdown } from './dropdown'
import Link from './link'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

type Props = DropdownLinkFragment & {
  pushSx?: SxStyleProp
  pushLinkSx?: SxStyleProp
}

type MappedLink = { category: string; children: Array<LinkFragment> }

const AccordionLink = ({
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

  const getMappedLinks = (originalCollection: any) => {
    const result: Array<MappedLink> = []
    originalCollection.forEach((element: any) => {
      if (
        result.length === 0 ||
        !result?.some((item: any) => item?.category === element?.menuCategory)
      ) {
        result.push({
          category:
            element?.menuCategory?.toString === undefined
              ? ''
              : element?.menuCategory?.toString(),
          children: originalCollection.filter(
            (item: any) => item?.menuCategory === element?.menuCategory
          )
        })
      }
    })
    return result
  }

  const categoriesArray = getMappedLinks(dropdownLinksCollection?.items)

  return (
    <div sx={pushSx}>
      <Box
        as="button"
        aria-label="open accordion"
        sx={{
          userSelect: 'none',
          cursor: 'default',
          display: 'inline-flex',
          alignItems: 'center',
          '&:focus': { color: 'primary', outline: 'none' }
        }}
        ref={anchorRef}
        onClick={handleClick}
      >
        {children}{' '}
        <i sx={{ pl: 2 }}>{isOpen ? <FiChevronUp /> : <FiChevronDown />}</i>
      </Box>
      {isOpen && (
        <Box>
          {categoriesArray?.map((link) => (
            <Box key={link?.category} sx={{ my: '20px' }}>
              <Text
                sx={{
                  color: 'gray8',
                  fontSize: '20px',
                  fontWeight: 600
                }}
              >
                {link.category}
              </Text>
              {link.children.map((children) => (
                <Link
                  key={children.children}
                  {...children}
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
            </Box>
          ))}
        </Box>
      )}
    </div>
  )
}

export default AccordionLink
