import { useEffect, useState } from 'react'
import VerticalMenuProps, { Item } from './types'
import verticalMenuStyles from './verticalMenu.module.css'

const headerHeight = 109 // 109 is the height of the header

type MenuItem = Item & { onClick: any; selected: any }

const MenuItem = ({ label, onClick, selected }: MenuItem) => {
  return (
    <button
      onClick={onClick}
      className={verticalMenuStyles.button}
      style={{
        background: selected ? '#29272E' : 'inherit'
      }}
    >
      {label}
    </button>
  )
}

const VerticalMenu = (props: VerticalMenuProps) => {
  const [selectedItem, setSelectedItem] = useState()

  const handleScroll = (id: any) => {
    const contentContainer = document.getElementById(id)
    const verticalMenu = document.getElementById('vertical-menu')

    const scrollY = window.scrollY + headerHeight

    if (!contentContainer || !verticalMenu) {
      return
    }

    const bodyRectTop = document.body.getBoundingClientRect()?.top
    const contentContainerRect = contentContainer?.getBoundingClientRect() || {
      top: 0,
      bottom: 0
    }

    const offset = contentContainerRect?.top - bodyRectTop

    if (scrollY > offset) {
      const difference = scrollY - offset

      const verticalMenuHeight = difference + verticalMenu.clientHeight
      if (contentContainer?.clientHeight > verticalMenuHeight) {
        setTimeout(() => {
          verticalMenu.style.marginTop = `${difference}px`
        }, 10)
      }
    } else {
      if (verticalMenu.style.marginTop !== '0px') {
        setTimeout(() => {
          verticalMenu.style.marginTop = `${0}px`
        }, 10)
      }
    }
  }

  useEffect(() => {
    if (props.contentId) {
      setTimeout(() => {
        const verticalMenuContainer = document.getElementById('vertical-menu')
        const contentContainer = document.getElementById(props.contentId)

        if (verticalMenuContainer && contentContainer) {
          const contentHeight = parseInt(
            window.getComputedStyle(contentContainer)?.height
          )

          verticalMenuContainer.style.height = `${
            window.innerHeight - headerHeight
          }px`
          verticalMenuContainer.style.maxHeight = `${contentHeight}px`
        }
      }, 100)
      window.addEventListener('scroll', () => {
        handleScroll(props.contentId)
      })
      return () => {
        setTimeout(() => {
          window.removeEventListener('scroll', handleScroll)
        }, 10)
      }
    }
  }, [props])

  const onClick = (id: any) => {
    setSelectedItem(id)
    const element = document.getElementById(id)
    if (element) {
      const elementTop =
        element.getBoundingClientRect().top + window.scrollY - headerHeight
      window.scrollTo({
        top: elementTop,
        behavior: 'smooth'
      })
    }
  }

  if (props.items) {
    const { items } = props
    return (
      <section>
        {items.map((item) => (
          <MenuItem
            key={item.label}
            onClick={() => onClick(item.id)}
            selected={item.id === selectedItem}
            {...item}
          />
        ))}
      </section>
    )
  } else {
    return <h1>VerticalMenu Component</h1>
  }
}

export default VerticalMenu
