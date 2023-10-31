import StringComponentProps from '../types'
import subtitleStyles from './subtitle.module.css'

const SubtitleComponent = ({
  text,
  layoutComponentClasses
}: StringComponentProps) => {
  return (
    <h3 className={`${subtitleStyles.subtitle} ${layoutComponentClasses}`}>
      {text}
    </h3>
  )
}

export default SubtitleComponent
