import StringComponentProps from '../types'
import titleStyles from './title.module.css'

const TitleComponent = ({
  text,
  layoutComponentClasses
}: StringComponentProps) => {
  return (
    <h1 className={`${titleStyles.title} ${layoutComponentClasses}`}>{text}</h1>
  )
}

export default TitleComponent
