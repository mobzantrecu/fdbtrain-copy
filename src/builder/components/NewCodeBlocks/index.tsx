import codeBlocksStyles from './codeBlocks.module.css'

import TabContainer from './components/TabContainer'
import useSelectTab from './hooks/useSelectTab'
import CodeBlockProps, { Tab } from './types'
import SyntaxHighlighter from 'react-syntax-highlighter'
import Fauna from '../../../components/syntax-highlighter-themes/Fauna'
const NewCodeBlock = (props: CodeBlockProps) => {
  const [selectedBlock, callSetSelectedBlock] = useSelectTab(props.tabs)

  const handleClickButtonClick = (tab: Tab) => {
    callSetSelectedBlock(tab)
  }

  if (props.tabs) {
    const { tabs } = props

    return (
      <div className={codeBlocksStyles.container}>
        <div className={codeBlocksStyles.codeContainer}>
          <TabContainer
            buttonStyles={{
              background: selectedBlock.tabButtonColor || 'transparent',
              border: selectedBlock.tabButtonBorder || 'transparent',
              color: selectedBlock.tabButtonFontColor
            }}
            tabs={tabs}
            selectedTab={selectedBlock}
            setSelectedTab={handleClickButtonClick}
          />
          <section>
            <SyntaxHighlighter
              language={selectedBlock.language || 'javascript'}
              wrapLines
              wrapLongLines
              style={Fauna}
              customStyle={{
                background: 'transparent',
                fontSize: '16px'
              }}
            >
              {selectedBlock.code}
            </SyntaxHighlighter>
          </section>
        </div>
      </div>
    )
  } else {
    return <h1>NewCodeBlock Component</h1>
  }
}

export default NewCodeBlock
