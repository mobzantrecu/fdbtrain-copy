import { Box, BoxProps, SxStyleProp } from 'theme-ui'
import { forwardRef } from 'react'

type Props = Omit<BoxProps, 'sx'> & {
  ratio: number
  pushSx?: SxStyleProp
  width?: string | number
}

const AspectRatio = forwardRef<HTMLDivElement, Props>(
  ({ ratio, width = '100%', children, pushSx, ...restProps }, ref) => (
    <Box sx={{ width }}>
      <Box
        {...restProps}
        ref={ref}
        sx={{
          position: 'relative',
          height: 0,
          overflow: 'hidden',
          pb: `${100 / ratio}%`,
          ...pushSx
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  )
)

export default AspectRatio
