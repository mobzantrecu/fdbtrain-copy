/** @jsx jsx */
import { UsageRateFragment } from 'lib/contentful/generated'
import { formatPrice } from 'lib/util'
import { useCallback, useEffect, useState } from 'react'
import { jsx, Input, Label, Text, Grid } from 'theme-ui'
import { buttonWidth, Values } from '.'

type Props = {
  label: string
  id: keyof Omit<UsageRateFragment, '__typename' | 'label'>
  placeholder: string
  usageRate: UsageRateFragment | null | undefined
  calculate: (v: number, rate: number) => number
  value: number
  setValues: React.Dispatch<React.SetStateAction<Values>>
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
    setValues((p) => ({
      ...p,
      [id]: calculate(isNaN(value) ? 0 : value, rate)
    }))
  }, [calculate, id, inputValue, setValues, usageRate])

  return (
    <Grid
      columns={[1, `1fr fit-content(14px) ${buttonWidth}`]}
      sx={{ alignItems: 'end' }}
      gap={[0, '62px']}
    >
      <div>
        <Label htmlFor={id} sx={{ color: 'gray8', pb: 0 }}>
          {label}
        </Label>
        <Input
          placeholder={placeholder}
          id={id}
          name={id}
          type="number"
          onChange={handleChange}
          value={inputValue}
          sx={{
            fontSize: '14px',
            ':after': { content: '"OPS"' },
            height: '36px',
            border: '1px solid #797E80',
            borderRadius: '4px',
            pl: 2
          }}
        />
      </div>
      <Text
        sx={{
          color: 'gray10',
          fontWeight: '900',
          height: '36px',
          display: 'flex',
          alignItems: 'center',
          fontSize: '35px',
          justifyContent: 'center'
        }}
      >
        =
      </Text>
      <div
        sx={{
          color: 'gray10',
          fontSize: '18px',
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '36px',
          borderRadius: 'md'
        }}
      >
        <span
          sx={{
            maxWidth: '100%',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap'
          }}
        >
          {formatPrice(value)}
        </span>
      </div>
    </Grid>
  )
}

function parseValue(value: string) {
  return parseFloat(value)
}

export default CalculatorItem
