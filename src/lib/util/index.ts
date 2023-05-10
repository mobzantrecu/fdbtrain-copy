function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  const ret: any = {}
  for (const key of keys) {
    ret[key] = obj[key]
  }
  return ret
}

function camelCase(str: string) {
  const camel = str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase())
  return camel.substring(0, 1).toUpperCase() + camel.substring(1)
}

const keys = <T extends Record<string, any>>(obj: T) =>
  Object.keys(obj) as (keyof T)[]

const withAtLeastTwoDigits = (value: string | number | undefined) => {
  if (!value) return '00'
  let stringToTest = value.toString()
  let minus = ''
  if (stringToTest.startsWith('-')) {
    minus = '-'
    stringToTest = stringToTest.replace('-', '')
  }

  if (stringToTest.length === 1) return `${minus}0${stringToTest}`
  return `${minus}${stringToTest}`
}

function formatPrice(num: number) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })

  return formatter.format(num)
}

function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

export { pick, sleep, camelCase, keys, withAtLeastTwoDigits, formatPrice }
