import SectionLayout from '../common/SectionLayout/SectionLayout'
import IntegrationModelProps from './types'
import getButton from '../common/Button/utils'
import AdditionalTitle from '../common/Card/AdditionalTitle'
import integrationStyles from './integration.module.css'
import Title from '../common/Card/Title'
import Subtitle from '../common/Card/Subtitle'

const Integrations = (props: IntegrationModelProps) => {
  if (props.integrationsModel) {
    const {
      title,
      additionalTitle,
      subtitle,
      button,
      image
    } = props.integrationsModel.value.data

    return (
      <SectionLayout layoutComponentClasses={integrationStyles.sectionLayout}>
        <div className={integrationStyles.container}>
          <div className={integrationStyles.textContainer}>
            <AdditionalTitle>{additionalTitle}</AdditionalTitle>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            {button && <div style={{ marginTop: 25 }}>{getButton(button)}</div>}
          </div>
          <div
            style={{ backgroundImage: `url(${image})` }}
            className={integrationStyles.image}
          ></div>
        </div>
      </SectionLayout>
    )
  }

  return <h1>Integrations</h1>
}

export default Integrations
