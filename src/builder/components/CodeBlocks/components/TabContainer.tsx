import { useMemo } from 'react'
import { Tab } from '../types'
import tabContainerStyles from './tabContainer.module.css'

type TabContainerProps = {
  tabs: Tab[]
  selectedTab: Tab
  setSelectedTab: (tab: Tab) => void
  background?: string
  mode?: string
}

type ButtonProps = {
  className: string
  onClick: () => void
  text: string
}

const ButtonTab = ({ className, onClick, text }: ButtonProps) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  )
}

const TabContainer = ({
  tabs,
  selectedTab,
  setSelectedTab,
  background,
  mode
}: TabContainerProps) => {
  const handleButtonClick = (tab: Tab) => {
    setSelectedTab(tab)
  }

  const selectedButtonMode =
    mode?.toLocaleLowerCase() === 'light'
      ? tabContainerStyles.selectedButtonLight
      : tabContainerStyles.selectedButton

  const selectedButtonStyles = useMemo(
    () => `${tabContainerStyles.button} ${selectedButtonMode}`,
    [selectedTab]
  )

  const backgroundColor = background

  return (
    <div
      style={{ background: backgroundColor }}
      className={tabContainerStyles.container}
    >
      {tabs.map((t, i) => (
        <ButtonTab
          key={i}
          text={t.name}
          onClick={() => handleButtonClick(t)}
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
