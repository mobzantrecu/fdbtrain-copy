import SectionLayout from '../common/SectionLayout/SectionLayout'
import SubtitleComponent from '../common/Subtitle'
import TitleComponent from '../common/Title'
import titleAndImageStyles from './titleAndImage.module.css'
import TitleAndImageModelProps from './types'
import Image from 'next/image'

const TitleAndImage = (props: TitleAndImageModelProps) => {
  if (props.titleAndImageModel) {
    const { title, subtitle, image } = props.titleAndImageModel.value.data

    return (
      <SectionLayout
        layoutComponentClasses={`${titleAndImageStyles.sectionLayout}`}
      >
        <div className={titleAndImageStyles.container}>
          <TitleComponent
            layoutComponentClasses={titleAndImageStyles.title}
            text={title}
          />
          <SubtitleComponent
            layoutComponentClasses={titleAndImageStyles.subtitle}
            text={subtitle}
          />
          <Image width={image.width} height={image.height} src={image.image} />
        </div>
      </SectionLayout>
    )
  }

  return <h1>Title And Image</h1>
}

export default TitleAndImage
