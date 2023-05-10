import Link from 'components/primitives/link'
import { LinkFragment } from 'lib/contentful/generated'
import { Box } from 'theme-ui'

const Status = ({ href, children }: LinkFragment) => {
  return (
    <Box
      sx={{
        flex: '1 1'
      }}
    >
      <Link variant="nav" href={href} target="_blank" rel="noopener">
        {children}
      </Link>
    </Box>
  )
}

export default Status
