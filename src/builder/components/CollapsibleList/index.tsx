import { useState } from 'react'
import SectionLayout from '../common/SectionLayout/SectionLayout'
import TitleComponent from '../common/Title'
import CollapsibleItem from './CollapsibleListItem'
import collapsibleListStyles from './collapsibleList.module.css'
import CollapsibleListModelProps from './types'

const CollapsibleList = (props: CollapsibleListModelProps) => {
  const [selectedOptions, setSelectedOptions] = useState([] as number[])

  const onItemClick = (id: number) => {
    if (selectedOptions.includes(id)) {
      const filteredOptions = selectedOptions.filter((x) => x !== id)
      setSelectedOptions(filteredOptions)
    } else {
      setSelectedOptions([...selectedOptions, id])
    }
  }

  if (props.collapsibleModel) {
    const { title, collapsibleList } = props.collapsibleModel.value.data

    return (
      <SectionLayout
        layoutComponentClasses={`${collapsibleListStyles.sectionLayout}`}
      >
        <div className={collapsibleListStyles.container}>
          <TitleComponent
            layoutComponentClasses={collapsibleListStyles.title}
            text={title}
          />
          <div style={{ gap: 20 }} className={collapsibleListStyles.container}>
            {collapsibleList.map((item, i) => (
              <CollapsibleItem
                onClick={() => onItemClick(i)}
                key={i}
                {...item}
                selected={selectedOptions.includes(i)}
              />
            ))}
          </div>
        </div>
      </SectionLayout>
    )
  }

  return <h1>Collapsible List</h1>
}

export default CollapsibleList
