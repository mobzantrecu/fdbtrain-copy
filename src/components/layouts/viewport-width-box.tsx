import { forwardRef } from 'react'
import { Box, BoxProps } from 'theme-ui'

const ViewportWidthBox = forwardRef<HTMLDivElement, BoxProps>((props, ref) => (
  <Box
    {...props}
    ref={ref}
    sx={{
      overflow: 'hidden',
      position: 'relative',
      width: 'calc(var(--vw, 1vw) * 100)',
      left: '50%',
      transform: 'translateX(-50%)',
      ...props.sx
    }}
  />
))

export default ViewportWidthBox
