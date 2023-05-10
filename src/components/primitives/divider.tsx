/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui'

type SizeValue = string | null | number

type Props = {
  size?: SizeValue | SizeValue[]
  isTransparent?: boolean
  isVertical?: boolean
  my?: string
  mx?: string
  mt?: string
  mb?: string
  ml?: string
  mr?: string
  isInline?: boolean
  bg?: string
  pushSx?: SxStyleProp
}

const Divider: React.FC<Props> = ({
  size = '8',
  isTransparent,
  isVertical,
  my,
  mx,
  mt,
  mb,
  ml,
  mr,
  isInline,
  bg = 'border',
  pushSx
}) => (
  <div
    sx={{
      width: isVertical ? '1px' : size,
      height: isVertical ? size : '1px',
      bg: isTransparent ? 'transparent' : bg,
      my,
      mx,
      mt,
      mb,
      ml,
      mr,
      display: isInline ? 'inline-block' : 'block',
      ...pushSx
    }}
  />
)

export default Divider
