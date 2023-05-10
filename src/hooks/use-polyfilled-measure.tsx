import { ResizeObserver } from '@juggle/resize-observer'
import useMeasure, { Options } from 'react-use-measure'

const usePolyfilledMeasure = (
  options?: Omit<Options, 'polyfill'> | undefined
) => useMeasure({ polyfill: ResizeObserver, ...options })

export default usePolyfilledMeasure
