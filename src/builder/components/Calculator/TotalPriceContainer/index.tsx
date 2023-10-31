import { formatPrice } from '../../../../lib/util'
import priceContainerStyles from './totalPriceContainer.module.css'

type TotalPriceContainerProps = {
  label: string
  total: any
}

const TotalPriceContainer = ({ label, total }: TotalPriceContainerProps) => {
  return (
    <div className={priceContainerStyles.container}>
      <div className={priceContainerStyles.label}>{label}</div>
      <div className={priceContainerStyles.priceContainer}>
        <div className={priceContainerStyles.priceContainer}>
          {formatPrice(total)}
        </div>
      </div>
    </div>
  )
}

export default TotalPriceContainer
