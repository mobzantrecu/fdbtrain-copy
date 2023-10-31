import { useMemo } from 'react'
import MarkdownBodyBuilder from '../MarkdownBody'
import CodeContainer from './components/CodeContainer'
import TabContainer from './components/TabContainer'
import useSelectTab from './hooks/useSelectTab'
import CodeBlockProps, { Tab } from './types'
import codeBlocksStyles from './codeBlocks.module.css'

type DescriptionDisplayProps = {
  selectedBlock: Tab
}

const DescriptionDisplay = ({ selectedBlock }: DescriptionDisplayProps) => {
  if (selectedBlock?.descriptionIsCode) {
    return (
      <div className={codeBlocksStyles.codeContainerDescription}>
        <CodeContainer
          styles={{
            borderRight: '1px rgb(137 107 255 / 55%) solid',
            maxHeight: '272px'
          }}
          code={selectedBlock?.description || ''}
          language={selectedBlock?.language}
        />
      </div>
    )
  } else {
    return (
      <div className={codeBlocksStyles.markdownContainer}>
        <MarkdownBodyBuilder text={selectedBlock?.description || ''} />
      </div>
    )
  }
}

const CodeBlock = (props: CodeBlockProps) => {
  const [selectedBlock, callSetSelectedBlock] = useSelectTab(props.tabs)

  const handleClickButtonClick = (tab: Tab) => {
    callSetSelectedBlock(tab)
  }

  if (props.tabs) {
    const { tabs, buttonContainerStyles } = props

    const anyHasDescription = useMemo(() => tabs.some((t) => t.description), [
      tabs
    ])

    const containerClass = selectedBlock?.descriptionIsCode
      ? `${codeBlocksStyles.container} ${codeBlocksStyles.containerWithCodeDescription}`
      : `${codeBlocksStyles.container}`

    return (
      <div className={containerClass}>
        {anyHasDescription && !selectedBlock?.descriptionOnTheRight && (
          <DescriptionDisplay selectedBlock={selectedBlock} />
        )}
        <div className={codeBlocksStyles.codeContainer}>
          {tabs.length > 1 && (
            <TabContainer
              background={buttonContainerStyles?.background || 'inherit'}
              mode={buttonContainerStyles?.mode}
              tabs={tabs}
              selectedTab={selectedBlock}
              setSelectedTab={handleClickButtonClick}
            />
          )}
          <CodeContainer
            code={selectedBlock?.code || ''}
            styles={{
              borderLeft: selectedBlock?.descriptionIsCode
                ? '1px rgb(137 107 255 / 55%) solid'
                : ''
            }}
            language={selectedBlock?.language}
          />
        </div>

        {anyHasDescription && selectedBlock?.descriptionOnTheRight && (
          <DescriptionDisplay selectedBlock={selectedBlock} />
        )}
      </div>
    )
  } else {
    return <h1>CodeBlock Component</h1>
  }
}

export default CodeBlock
