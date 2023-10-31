import { BuilderProps, ReferenceModel } from '../../types'

type GlobalUsageRate = {
  id: string
  label: string
  readOperationsMillion: number
  writeOperationsMillion: number
  transactionalComputeOperationsMillion: number
  storageGb: number
}

type UsageRate = {
  id: string
  readOperations: number
  writeOperations: number
  transactionalComputeOperations: number
  storage: number
}

type ListItem = {
  title: string
  items: { item: string }[]
}

export type PricingPlan = {
  name: string
  description: string
  priceLabel: string
  creditsPerMonth: number
  listItems: ListItem[]
  usageRate: UsageRate
}

export interface Data {
  plans: PricingPlan[]
  usageRates: GlobalUsageRate[]
  title: string
  totalLabel: string
  subtitle: string
}

export interface CardProps {
  subtitle: string
  link: Link
  title: string
}

export interface Link {
  href: string
  title: string
  target: string
}

interface CalculatorReferenceModel extends ReferenceModel {
  value: Omit<ReferenceModel['value'], 'data'> & {
    data: Data
  }
}

type CalculatorProps = BuilderProps & {
  calculatorModel: CalculatorReferenceModel
}

export default CalculatorProps
