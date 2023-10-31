export const calculateTotal = (
  values: number[],
  backupGBvalue: number,
  creditsPerMonth: number | null | undefined
) => {
  const subtotal =
    Object.values(values).reduce((t, v) => t + v, 0) + backupGBvalue
  if (!creditsPerMonth) return subtotal
  return subtotal < creditsPerMonth ? creditsPerMonth : subtotal
}
