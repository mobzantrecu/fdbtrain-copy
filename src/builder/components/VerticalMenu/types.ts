import { BuilderProps } from '../../types'

export type Item = {
  id: string
  label: string
}

type VerticalMenuProps = BuilderProps & {
  contentId: string
  items: Item[]
}

export default VerticalMenuProps
