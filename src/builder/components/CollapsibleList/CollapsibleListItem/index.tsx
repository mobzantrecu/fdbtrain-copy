import MarkdownBody from '../../../../components/compound/markdown-body'
import collapsibleListStyles from '../collapsibleList.module.css'
import { Close } from './Close'
import Open from './Open'

type CollapsibleItemProps = {
  title: string
  subtitle: string
  selected: boolean
  onClick: () => void
}
const CollapsibleItem = ({
  title,
  subtitle,
  selected,
  onClick
}: CollapsibleItemProps) => {
  const iconClass = selected ? 'close' : 'open'

  return (
    <div
      className={`${collapsibleListStyles.itemContainer} ${
        collapsibleListStyles[`container-${iconClass}`]
      }`}
    >
      {!selected ? <Open onClick={onClick} /> : <Close onClick={onClick} />}
      <div
        onClick={onClick}
        style={{ width: '100%' }}
        className={collapsibleListStyles.container}
      >
        <h1 className={collapsibleListStyles.itemTitle}>{title}</h1>
        <p
          className={collapsibleListStyles.subtitle}
          style={{ display: selected ? 'block' : 'none' }}
        >
          <MarkdownBody source={subtitle ?? ''} />
        </p>
      </div>
    </div>
  )
}

export default CollapsibleItem
