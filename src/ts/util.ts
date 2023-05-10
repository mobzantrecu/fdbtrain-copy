export type QueryPropType<TObj, TProp extends keyof TObj> =
  | TObj[TProp]
  | null
  | undefined
