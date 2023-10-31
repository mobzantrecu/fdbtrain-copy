import CalculatorProps from './types'
import calculatorStyles from './calculator.module.css'
import TotalPriceContainer from './TotalPriceContainer'
import { useCallback, useMemo, useState } from 'react'
import { calculateTotal } from './utils/utils'
import SelectSection from './SelectSection'
import ItemsContainer from './Item/Container'

const Calculator = (props: CalculatorProps) => {
  if (props.calculatorModel) {
    const { plans, totalLabel, usageRates } = props.calculatorModel.value.data
    const firstBlock = plans[0]

    const [selectedPlan, setSelectedPlan] = useState<string>(firstBlock.name)
    const [selectedRegionGroup, setSelectedRegionGroup] = useState<string>(
      usageRates[0].label
    )
    const [values, setValues] = useState<any>({
      readOperationsMillion: 0,
      storageGb: 0,
      transactionalComputeOperationsMillion: 0,
      writeOperationsMillion: 0
    })
    const [backupGbValue, setBackupGbValue] = useState(0)

    const plan = plans.find((p) => p.name === selectedPlan) || plans[0]

    const usageRate = useMemo(() => {
      return (
        usageRates.find((u) => u?.label === selectedRegionGroup) ??
        plan.usageRate
      )
    }, [plan.usageRate, selectedRegionGroup, usageRates])

    const total = calculateTotal(values, backupGbValue, plan?.creditsPerMonth)

    const handleSelectedPlanChange = useCallback(
      (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedPlan(e.target.value)
      },
      []
    )

    const handleSelectedRegionGroupChange = useCallback(
      (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedRegionGroup(e.target.value)
      },
      []
    )

    const getUsageRatesDependingOnPlanName = () => {
      if (plan.name !== 'Pro') {
        return usageRates.filter((rate) => rate.label !== 'Global')
      }

      return usageRates
    }

    return (
      <div className={calculatorStyles.container}>
        <SelectSection
          handleSelectedPlanChange={handleSelectedPlanChange}
          handleSelectedRegionGroupChange={handleSelectedRegionGroupChange}
          selectedPlan={selectedPlan}
          selectedRegionGroup={selectedRegionGroup}
          plans={plans}
          usageRates={getUsageRatesDependingOnPlanName()}
        />
        <ItemsContainer
          values={values}
          setValues={setValues}
          usageRate={usageRate}
          setBackupGbValue={setBackupGbValue}
          backupGbValue={backupGbValue}
        />
        <TotalPriceContainer label={totalLabel} total={total} />
      </div>
    )
  }

  return <h1>Calculator Component</h1>
}

export default Calculator
