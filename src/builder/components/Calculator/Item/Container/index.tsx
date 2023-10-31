import CalculatorItem from '..'
import BackupGbItem from '../../../../../components/sections/pricing/calculator/backupGbItem'
import itemContainerStyles from './itemContainer.module.css'

const aMillion = 1000000
const calculatorItems = [
  {
    label: 'Monthly read operations',
    id: 'readOperationsMillion',
    placeholder: '',
    calculate: (v: number, ratePerMillion: number) => {
      const ratePerOperation = ratePerMillion / aMillion
      return v * ratePerOperation
    }
  },
  {
    label: 'Monthly write operations',
    id: 'writeOperationsMillion',
    placeholder: '',
    calculate: (v: number, ratePerMillion: number) => {
      const ratePerOperation = ratePerMillion / aMillion
      return v * ratePerOperation
    }
  },
  {
    label: 'Monthly compute operations',
    id: 'transactionalComputeOperationsMillion',
    placeholder: '',
    calculate: (v: number, ratePerMillion: number) => {
      const ratePerOperation = ratePerMillion / aMillion
      return v * ratePerOperation
    }
  },
  {
    label: 'Monthly data stored (GB)',
    id: 'storageGb',
    placeholder: '',
    calculate: (v: number, ratePerGB: number) => {
      return v * ratePerGB
    }
  }
]

type ItemsContainerProps = {
  values: any
  setValues: (values: any) => void
  setBackupGbValue: (values: any) => void
  usageRate: any
  backupGbValue: any
}

const ItemsContainer = ({
  values,
  setValues,
  usageRate,
  setBackupGbValue,
  backupGbValue
}: ItemsContainerProps) => {
  return (
    <div className={itemContainerStyles.container}>
      {calculatorItems.map((item) => (
        <CalculatorItem
          key={item.id}
          {...item}
          value={values[item.id]}
          setValues={setValues}
          usageRate={usageRate}
          placeholder="0"
        />
      ))}
      <div style={{ marginTop: '15px' }}>
        <BackupGbItem
          backupGbValue={backupGbValue}
          setBackupGbValue={setBackupGbValue}
        />
      </div>
    </div>
  )
}

export default ItemsContainer
