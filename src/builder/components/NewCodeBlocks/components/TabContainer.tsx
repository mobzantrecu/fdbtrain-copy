import { useMemo } from 'react'
import { Tab } from '../types'
import tabContainerStyles from './tabContainer.module.css'

type TabContainerProps = {
  tabs: Tab[]
  selectedTab: Tab
  setSelectedTab: (tab: Tab) => void
  buttonStyles: any
}

type ButtonProps = {
  className: string
  onClick: () => void
  text: string
  styles: any
  disabled: boolean
}

const ButtonTab = ({
  className,
  onClick,
  text,
  disabled,
  styles
}: ButtonProps) => {
  return (
    <button
      style={styles}
      disabled={disabled}
      className={className}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

const TabContainer = ({
  tabs,
  selectedTab,
  buttonStyles,
  setSelectedTab
}: TabContainerProps) => {
  const handleButtonClick = (tab: Tab) => {
    setSelectedTab(tab)
  }

  const selectedButtonStyles = useMemo(() => `${tabContainerStyles.button}`, [
    selectedTab
  ])

  return (
    <div className={tabContainerStyles.container}>
      {tabs.map((t, i) => (
        <ButtonTab
          disabled={t.disabled}
          key={i}
          text={t.name}
          onClick={() => handleButtonClick(t)}
          styles={selectedTab.name === t.name ? buttonStyles : {}}
          className={
            selectedTab.name === t.name
              ? selectedButtonStyles
              : tabContainerStyles.button
          }
        />
      ))}
    </div>
  )
}

export default TabContainer
