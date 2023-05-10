import { Box, Text } from 'theme-ui'
import { forwardRef } from 'react'
import theme from 'lib/theme'
import { TopNotificationFragment } from 'lib/contentful/generated'
import Link from 'components/primitives/link'

const TopNotification = forwardRef(
  (
    { title, link }: TopNotificationFragment,
    ref: React.Ref<HTMLDivElement>
  ) => {
    const bannerClick = () => {
      if (window && link?.href) {
        window.location = (link?.href as unknown) as Location
      }
    }

    return (
      <Box
        onClick={bannerClick}
        ref={ref}
        sx={{
          cursor: 'pointer',
          background:
            'linear-gradient(90deg, rgba(65,28,215,1) 0%, rgba(79,61,190,1) 100%)',
          fontSize: '18px',
          color: 'background',
          textAlign: 'center',
          p: 2,
          variant: 'text.small',
          lineHeight: 'body',
          position: 'relative',
          zIndex: theme.zIndices.header + 1,
          boxShadow: 'border'
        }}
      >
        <Text sx={{ display: 'inline' }}>{title}</Text>
        {link && (
          <Link
            {...link}
            variant="accentLightGray"
            sx={{
              display: 'inline-flex',
              cursor: 'pointer',
              alignItems: 'center',
              ml: 2
            }}
            arrow
          />
        )}
      </Box>
    )
  }
)

export default TopNotification
