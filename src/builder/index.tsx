import { Builder } from '@builder.io/react'
import CardGrid from './components/CardGrid'
import cardGridBuilderProps from './components/CardGrid/builderProps'
import CollapsibleList from './components/CollapsibleList'
import collapsibleBuilderProps from './components/CollapsibleList/builderProps'
import Integration from './components/Integrations'
import integrationsBuilderProps from './components/Integrations/builderProps'
import logoListBuilderProps from './components/LogoList/builderProps'
import QuoteGrid from './components/QuotesGrid'
import quoteGridBuilderProps from './components/QuotesGrid/builderProps'
import SolutionsHome from './components/SolutionsHome'
import solutionsHomeBuilderProps from './components/SolutionsHome/builderProps'
import ThreeCardRow from './components/ThreeCardRow'
import threeCardBuilderProps from './components/ThreeCardRow/builderProps'
import TitleAndImage from './components/TitleAndImage'
import titleAndImageBuilderProps from './components/TitleAndImage/builderProps'
import LogoList from './components/LogoList'
import SolutionsForm from './components/SolutionsForm'
import solutionsFormBuilderProps from './components/SolutionsForm/builderProps'
import Calculator from './components/Calculator'
import calculatorBuilderProps from './components/Calculator/builderProps'
import markdownBodyBuilderProps from './components/MarkdownBody/builderProps'
import MarkdownBodyBuilder from './components/MarkdownBody'
import CodeBlock from './components/CodeBlocks'
import codeBlockBuilderProps from './components/CodeBlocks/builderProps'
import TextAnimationBuilder from './components/TextAnimation'
import textAnimationBuilderProps from './components/TextAnimation/builderProps'
import linkAndCardDetailsBuilderProps from './components/LinkAndCardDetailBuilder/builderProps'
import LinkAndCardDetail from './components/LinkAndCardDetailBuilder/builder'
import quoteSliderBuilderProps from './components/QuotesSlider/builderProps'
import QuoteSlider from './components/QuotesSlider'
import ReactSyntaxHighlighter from './components/SyntaxHighlighter'
import syntaxHighlighterBuilderProps from './components/SyntaxHighlighter/builderProps'
import newCodeBlockBuilderProps from './components/NewCodeBlocks/builderProps'
import NewCodeBlock from './components/NewCodeBlocks'
import verticalMenuBuilderProps from './components/VerticalMenu/builderProps'
import VerticalMenu from './components/VerticalMenu'

const declareBuilderComponents = () => {
  Builder.registerComponent(CardGrid, cardGridBuilderProps)
  Builder.registerComponent(ThreeCardRow, threeCardBuilderProps)
  Builder.registerComponent(Integration, integrationsBuilderProps)
  Builder.registerComponent(SolutionsHome, solutionsHomeBuilderProps)
  Builder.registerComponent(TitleAndImage, titleAndImageBuilderProps)
  Builder.registerComponent(LogoList, logoListBuilderProps)
  Builder.registerComponent(CollapsibleList, collapsibleBuilderProps)
  Builder.registerComponent(QuoteGrid, quoteGridBuilderProps)
  Builder.registerComponent(SolutionsForm, solutionsFormBuilderProps)
  Builder.registerComponent(MarkdownBodyBuilder, markdownBodyBuilderProps)
  Builder.registerComponent(Calculator, calculatorBuilderProps)
  Builder.registerComponent(CodeBlock, codeBlockBuilderProps)
  Builder.registerComponent(NewCodeBlock, newCodeBlockBuilderProps)
  Builder.registerComponent(TextAnimationBuilder, textAnimationBuilderProps)
  Builder.registerComponent(LinkAndCardDetail, linkAndCardDetailsBuilderProps)
  Builder.registerComponent(QuoteSlider, quoteSliderBuilderProps)
  Builder.registerComponent(
    ReactSyntaxHighlighter,
    syntaxHighlighterBuilderProps
  )
  Builder.registerComponent(VerticalMenu, verticalMenuBuilderProps)
}

export default declareBuilderComponents
