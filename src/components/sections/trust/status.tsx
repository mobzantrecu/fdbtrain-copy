/** @jsx jsx */
import { jsx, Box } from 'theme-ui'

const Status = ({
  mobile,
  statusHref
}: {
  mobile?: boolean
  statusHref: string
}) => {
  return (
    <a
      sx={{
        background: '#F8F9FE',
        display: 'flex',
        alignItems: 'center',
        justifyContent: mobile ? 'center' : 'flex-start',
        py: '18px',
        px: '32px'
      }}
      href={statusHref}
      rel="noopener"
      target="_blank"
    >
      <Box
        sx={{
          width: 52,
          height: 52,
          px: '11px',
          py: '16px',
          boxShadow: `0px 1px 0px rgba(0, 0, 0, 0.05), 0px 0px 8px rgba(0, 0, 0, 0.03), 0px 30px 30px rgba(0, 0, 0, 0.02)`,
          bg: '#64D9B8',
          borderRadius: 'full',
          overflow: 'hidden',
          mr: '18px'
        }}
      >
        <svg viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.81412 16.7301L2.98321 10.1862L0.0500488 12.9961L9.81412 22.35L29.95 3.05994L27.0169 0.25L9.81412 16.7301Z"
            fill="white"
          />
        </svg>
      </Box>
      <Box>
        <p sx={{ fontWeight: 500, fontSize: '14px' }}>Fauna status:</p>
        <p
          sx={{
            fontWeight: 'bold',
            fontSize: '25px',
            color: '#64D9B8',
            mt: '3px',
            lineHeight: 1
          }}
        >
          Operational
        </p>
      </Box>
    </a>
  )
}

export default Status
