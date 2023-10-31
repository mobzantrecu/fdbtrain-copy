import { useEffect, useState } from 'react'
import { Tab } from '../types'

const defaultTab = {
  code: '',
  language: '',
  name: ''
}

const useSelectTab = (incomingTabs: Tab[]) => {
  const [selectedBlock, setSelectedBlock] = useState(defaultTab)

  const callSetSelectedBlock = (tab: Tab) => {
    setSelectedBlock(tab)
  }

  useEffect(() => {
    if (incomingTabs?.length) {
      const tabs = incomingTabs || []
      setSelectedBlock(tabs[0])
    }
  }, [incomingTabs])

  return [selectedBlock, callSetSelectedBlock as any]
}

export default useSelectTab
