/** @jsx jsx */
import { jsx, Box, Card } from 'theme-ui'

const ImageRenderer = (props: any) => (
  <Box sx={{ position: 'relative', my: '72px' }}>
    <div
      sx={{
        position: 'absolute',
        top: -100,
        bottom: -100,
        right: 0,
        left: 0,
        backgroundImage: 'url(/images/backgrounds/features-grid.svg)',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        zIndex: 'behind',
        pointerEvents: 'none'
      }}
    />
    <Card p={0} sx={{ width: 'fit-content', mx: 'auto' }}>
      <img
        loading="lazy"
        sx={{ width: '100%', objectFit: 'cover' }}
        src={props.src}
        alt={props.alt ?? 'blog post image'}
      />
    </Card>
  </Box>
)

export default ImageRenderer
