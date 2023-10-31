import { formatPrice } from 'lib/util'
import { useCallback, useEffect, useState } from 'react'
import itemStyles from './item.module.css'

type Props = {
  label: string
  id: any
  placeholder: string
  usageRate: any
  calculate: (v: number, rate: number) => number
  value: any
  setValues: (val: any) => void
}

const CalculatorItem = ({
  label,
  id,
  placeholder,
  usageRate,
  calculate,
  value,
  setValues
}: Props) => {
  const [inputValue, setInputValue] = useState('')

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value)
  }, [])

  useEffect(() => {
    if (!usageRate || !usageRate[id]) return
    const rate = usageRate[id]
    if (!rate) return
    const value = parseValue(inputValue)
    setValues((p: any) => ({
      ...p,
      [id]: calculate(isNaN(value) ? 0 : value, rate)
    }))
  }, [calculate, id, inputValue, setValues, usageRate])

  return (
    <div className={itemStyles.item}>
      <div>
        <label htmlFor={id} className={itemStyles.itemLabel}>
          {label}
        </label>
        <input
          placeholder={placeholder}
          id={id}
          name={id}
          type="number"
          onChange={handleChange}
          value={inputValue}
          className={itemStyles.input}
        />
      </div>
      <span className={itemStyles.equalIcon}>=</span>
      <div className={itemStyles.priceContainer}>
        <span className={itemStyles.price}>{formatPrice(value)}</span>
      </div>
    </div>
  )
}

function parseValue(value: string) {
  return parseFloat(value)
}

export default CalculatorItem
