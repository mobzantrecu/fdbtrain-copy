/** @jsx jsx */
import { formatPrice } from 'lib/util'
import { useCallback, useEffect, useState } from 'react'
import { Grid, Input, jsx, Label, Text } from 'theme-ui'
import { buttonWidth } from '.'

type Props = {
  backupGbValue: number
  setBackupGbValue: React.Dispatch<React.SetStateAction<number>>
}

const BackupGbItem = ({ backupGbValue, setBackupGbValue }: Props) => {
  const [inputValue, setInputValue] = useState('')

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value)
  }, [])

  useEffect(() => {
    const value = parseValue(inputValue)
    setBackupGbValue(isNaN(value) ? 0 : value * 0.05)
  }, [inputValue, setBackupGbValue])

  return (
    <Grid
      columns={[1, `1fr fit-content(14px) ${buttonWidth}`]}
      sx={{ alignItems: 'end' }}
      gap={[0, '62px']}
    >
      <div>
        <Label htmlFor="backupGb" sx={{ color: 'gray8', pb: 0 }}>
          {'Monthly backup (GB)*'}
        </Label>
        <Input
          placeholder="0"
          id="backupGb"
          name="backupGb"
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
          {formatPrice(backupGbValue)}
        </span>
      </div>
    </Grid>
  )
}

function parseValue(value: string) {
  return parseFloat(value)
}

export default BackupGbItem
