import { startOfDay } from 'date-fns'

const today = startOfDay(new Date())

const toUTC = (date: Date | string) => {
  date = typeof date === 'string' ? new Date(date) : date
  return new Date(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds(),
    date.getUTCMilliseconds()
  )
}

export { today, toUTC }
