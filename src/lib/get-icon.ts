import dynamic from 'next/dynamic'
import { camelCase } from './util'

const getIcon = (icon: string | null | undefined) => {
  if (!icon) return null

  // @ts-ignore
  const DynamicIcon = dynamic(() =>
    // @ts-ignore
    import('react-icons/fi').then((module) => module[`Fi${camelCase(icon)}`])
  )

  return DynamicIcon
}

export default getIcon
