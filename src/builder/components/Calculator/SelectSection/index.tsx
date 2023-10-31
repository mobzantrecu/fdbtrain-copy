// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
React
import selectStyles from './selectSection.module.css'

type SelectSection = {
  handleSelectedPlanChange: (e: any) => void
  handleSelectedRegionGroupChange: (e: any) => void
  selectedPlan: any
  selectedRegionGroup: any
  plans: { name: string }[]
  usageRates: any[]
}

const SelectSection = ({
  handleSelectedPlanChange,
  handleSelectedRegionGroupChange,
  selectedPlan,
  selectedRegionGroup,
  usageRates,
  plans
}: SelectSection) => {
  return (
    <div className={selectStyles.container}>
      <div className={selectStyles.inputContainer}>
        <label
          htmlFor="selector"
          className={`${selectStyles.label}  ${selectStyles.font}`}
        >
          Select plan
        </label>
        <div>
          <select
            onChange={handleSelectedPlanChange}
            value={selectedPlan}
            id="selector"
            name="selector"
            className={`${selectStyles.input} ${selectStyles.font}`}
          >
            {plans.map((plan) => (
              <option key={plan.name} value={plan.name as string}>
                {plan.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div style={{ marginLeft: 16 }} className={selectStyles.inputContainer}>
        <label
          htmlFor="region-group"
          className={`${selectStyles.label}  ${selectStyles.font}`}
        >
          Select region group
        </label>
        <div>
          <select
            onChange={handleSelectedRegionGroupChange}
            value={selectedRegionGroup}
            id="region-group"
            className={`${selectStyles.input} ${selectStyles.font}`}
            name="region-group"
          >
            {usageRates.map((usageRate, i) => (
              <option key={i} value={usageRate?.label as string}>
                {usageRate?.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

export default SelectSection
