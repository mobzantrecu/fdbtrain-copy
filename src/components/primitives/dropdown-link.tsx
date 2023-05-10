/** @jsx jsx */
import TopNotification from 'components/sections/nav/top-notification'
import useLifecycleId from 'hooks/use-lifecycle-id'
import { DropdownLinkFragment, LinkFragment } from 'lib/contentful/generated'
import { useEffect, useRef } from 'react'
import { Box, BoxProps, Grid, jsx, Text } from 'theme-ui'
import Dropdown, { useDropdown } from './dropdown'
import Link from './link'

type topNotification = {
  topNotification?:
    | React.ComponentPropsWithRef<typeof TopNotification>
    | null
    | undefined
}

type Props = DropdownLinkFragment & BoxProps & topNotification

type MappedLink = { category: string; children: Array<LinkFragment> }

const DropdownLink = ({
  children,
  dropdownLinksCollection,
  topNotification,
  ...boxProps
}: Props) => {
  const { isOpen, open, close } = useDropdown()
  const anchorRef = useRef<HTMLDivElement>(null)
  const containerId = useLifecycleId()
  const dropdownId = useLifecycleId()

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      const { clientX, clientY } = e
      const elementMouseIsOver = document.elementFromPoint(clientX, clientY)
      if (!elementMouseIsOver) {
        return close()
      }
      const isHoveringDropdown =
        elementMouseIsOver.closest(`[data-id='${dropdownId}']`) !== null
      const isHoveringContainer =
        elementMouseIsOver === anchorRef.current ||
        elementMouseIsOver.closest(`[data-id='${containerId}']`) !== null
      if (!isHoveringContainer && !isHoveringDropdown) {
        return close()
      }
    }

    function handleClick(e: any) {
      const isInside =
        e?.target?.closest(`[data-id="${dropdownId}"]`) !== null ||
        e?.target?.closest(`[data-id="${containerId}"]`) !== null ||
        e?.target === anchorRef.current
      if (isInside) return
      close()
    }

    if (isOpen) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('click', handleClick)
      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('click', handleClick)
      }
    }
  }, [isOpen, close, dropdownId, containerId])

  const getGridVariantByItemsLength = (
    itemsLength?: number,
    width?: boolean
  ) => {
    if (width) {
      switch (itemsLength) {
        case 1:
          return '276px'
        case 2:
          return '552px'
        default:
          return '820px'
      }
    }

    switch (itemsLength) {
      case 1:
        return 'one'
      case 2:
        return 'two'
      default:
        return 'three'
    }
  }

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
    <>
      <Box
        {...boxProps}
        sx={{
          userSelect: 'none',
          cursor: 'default',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          '&:focus': { outline: 'none' },
          boxShadow: isOpen ? '0 -2px 0 #604BE9 inset ' : '',
          color: isOpen ? 'gray10' : 'gray8',
          ...boxProps.sx
        }}
        ref={anchorRef}
        onMouseEnter={open}
        data-id={containerId}
      >
        {children}
      </Box>

      <Dropdown
        isOpen={isOpen}
        close={() => undefined} // We are using a custom close func
        options={{ placement: 'bottom' }}
        data-id={dropdownId}
        marginTop={topNotification ? '109px' : '72px'}
        pushSx={{
          px: 2,
          py: 2,
          display: 'flex',
          maxWidth: getGridVariantByItemsLength(categoriesArray.length, true)
        }}
      >
        <Grid
          variant={getGridVariantByItemsLength(categoriesArray.length)}
          gap={0}
          sx={{
            columnGap: 0
          }}
        >
          {categoriesArray?.map((link) => {
            return (
              <Box key={link?.category}>
                <Text
                  sx={{
                    fontSize: 3,
                    px: 3,
                    mt: '16px',
                    mb: '24px',
                    color: 'gray8',
                    fontWeight: 600
                  }}
                >
                  {link.category}
                </Text>
                {link.children.map((children) => {
                  return (
                    <Box key={children.children}>
                      <Link
                        key={link?.category}
                        {...children}
                        isNav={true}
                        icon={children.icon}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          px: 3,
                          transition: 'all .2s',
                          variant: 'text.small',
                          color: 'gray10',
                          fontWeight: 600,
                          '&:hover': {
                            color: 'primary',
                            textDecoration: 'none'
                          },
                          '&:active': { opacity: 0.8 },
                          '&:focus': {
                            color: 'primary',
                            textDecoration: 'none'
                          },
                          i: { color: 'gray8', fontSize: 3, mr: 3 }
                        }}
                      />
                    </Box>
                  )
                })}
              </Box>
            )
          })}
        </Grid>
      </Dropdown>
    </>
  )
}

export default DropdownLink
