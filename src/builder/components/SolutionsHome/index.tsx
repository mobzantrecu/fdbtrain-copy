import getButton from '../common/Button/utils'
import SectionLayout from '../common/SectionLayout/SectionLayout'
import SubtitleComponent from '../common/Subtitle'
import TitleComponent from '../common/Title'
import solutionsHomeStyles from './solutionsHome.module.css'
import SolutionsHomeModelProps from './types'
import Image from 'next/image'

const SolutionsHome = (props: SolutionsHomeModelProps) => {
  if (props.solutionsHomeModel) {
    const {
      title,
      subtitle,
      buttons,
      image
    } = props.solutionsHomeModel.value.data

    const imageClass = image
      ? solutionsHomeStyles.withImageBackground
      : solutionsHomeStyles.withoutImageBackground

    return (
      <SectionLayout
        layoutComponentClasses={`${solutionsHomeStyles.sectionLayout} ${imageClass}`}
      >
        <div className={solutionsHomeStyles.container}>
          <TitleComponent
            layoutComponentClasses={solutionsHomeStyles.title}
            text={title}
          />
          <SubtitleComponent
            layoutComponentClasses={solutionsHomeStyles.subtitle}
            text={subtitle}
          />
          {buttons.map(({ button }, index) => {
            if (!button) {
              return <></>
            }

            return (
              <div style={{ marginBottom: 55 }} key={index}>
                {getButton(button)}
              </div>
            )
          })}
          {image && (
            <Image width={image.width} height={585} src={image.image} />
          )}
        </div>
      </SectionLayout>
    )
  }

  return <h1>Solutions Home</h1>
}

export default SolutionsHome
