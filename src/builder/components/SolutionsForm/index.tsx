import Form from '../common/Form'
import SectionLayout from '../common/SectionLayout/SectionLayout'
import SubtitleComponent from '../common/Subtitle'
import TitleComponent from '../common/Title'
import solutionsFormStyles from './solutionsForm.module.css'
import SolutionsFormModelProps from './types'

const SolutionsForm = (props: SolutionsFormModelProps) => {
  if (props.solutionsFormModel) {
    const { title, subtitle, form } = props.solutionsFormModel.value.data

    return (
      <div style={{ width: '100%' }}>
        <div className={solutionsFormStyles.imgContainer}></div>
        <SectionLayout
          layoutComponentClasses={`${solutionsFormStyles.sectionLayout}`}
        >
          <div className={solutionsFormStyles.container}>
            <div className={solutionsFormStyles.titleContainer}>
              <TitleComponent
                layoutComponentClasses={solutionsFormStyles.title}
                text={title}
              />
              <SubtitleComponent
                layoutComponentClasses={solutionsFormStyles.subtitle}
                text={subtitle}
              />
            </div>
            <Form submitUrl={form.submitUrl} button={form.button} />
          </div>
        </SectionLayout>
      </div>
    )
  }

  return <h1>Solutions Form</h1>
}

export default SolutionsForm
