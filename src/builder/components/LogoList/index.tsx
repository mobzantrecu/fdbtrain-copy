import Slider from '../../../components/primitives/slider'
import SectionLayout from '../common/SectionLayout/SectionLayout'
import logoListStyles from './logoList.module.css'
import LogoListModelProps from './types'

const LogoList = (props: LogoListModelProps) => {
  if (props.logoListModel) {
    const { logos } = props.logoListModel.value.data

    return (
      <SectionLayout layoutComponentClasses={`${logoListStyles.sectionLayout}`}>
        <div>
          <div className={logoListStyles.container}>
            {logos.map((logo, i) => {
              return (
                <div
                  key={i}
                  style={{ backgroundImage: `url(${logo.image})` }}
                  className={logoListStyles.image}
                ></div>
              )
            })}
          </div>
          <div className={logoListStyles.slider}>
            <Slider duration={1.5}>
              {logos.map((logo, i) => {
                return (
                  <div
                    key={i}
                    style={{
                      backgroundImage: `url(${logo.image})`,
                      marginRight: 30
                    }}
                    className={logoListStyles.image}
                  ></div>
                )
              })}
            </Slider>
          </div>
        </div>
      </SectionLayout>
    )
  }

  return <h1>Logo List</h1>
}

export default LogoList
