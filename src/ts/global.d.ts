// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { SxProps } from 'theme-ui'

declare module 'react' {
  interface Attributes {
    sx?: any //TODO: We should replace sx with SxProps.SxStyleProp
    loading?: any
  }
}
