import { event } from 'lib/scripts/ga'
import React, { createContext, useCallback, useContext, useEffect } from 'react'

type EventOptions = { label: string; value: string; nonInteraction?: boolean }

type SendEventHandler = (options: EventOptions) => void

type ClickHandler = (
  e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
  opts?: Partial<EventOptions>
) => void

type Context = {
  experimentName: string
  pageId: string
  sendEvent: SendEventHandler
  onCTAClick: ClickHandler
}

const ExperimentContext = createContext<undefined | Context>(undefined)

export const ExperimentProvider = ({
  experimentName,
  pageId,
  children,
  sendPageViewEvent = true
}: {
  children?: React.ReactNode
  experimentName: string
  pageId: string
  sendPageViewEvent?: boolean
}) => {
  const sendEvent: SendEventHandler = useCallback(
    (options) => {
      event({
        category: `A/B Test: ${experimentName}`,
        action: pageId,
        ...options
      })
    },
    [experimentName, pageId]
  )

  const handleCTAClick: ClickHandler = useCallback(
    (e, opts) => {
      const dataAttr = e.currentTarget.dataset['eventLabel']
      const label =
        opts?.label ?? dataAttr ?? 'CTA Click ' + e.currentTarget.innerText
      sendEvent({
        label,
        value: '1'
      })
    },
    [sendEvent]
  )

  useEffect(() => {
    if (!sendPageViewEvent) return
    sendEvent({
      label: 'Page View',
      value: '1',
      nonInteraction: true
    })
  }, [sendEvent, sendPageViewEvent])

  return (
    <ExperimentContext.Provider
      value={{ experimentName, pageId, sendEvent, onCTAClick: handleCTAClick }}
    >
      {children}
    </ExperimentContext.Provider>
  )
}

export const useExperiment = () => {
  const ctx = useContext(ExperimentContext)
  if (!ctx) {
    throw new Error(
      'useExperiment must be wrapped below an <ExperimentProvider />'
    )
  }
  return ctx
}
