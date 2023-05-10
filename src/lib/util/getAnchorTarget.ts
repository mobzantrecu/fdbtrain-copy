const BLANK = '_blank'
const SELF = '_self'

const getAnchorTarget = (href?: string) => {
  if (!href) return SELF
  return href?.includes(BLANK) ? BLANK : SELF
}

export default getAnchorTarget
