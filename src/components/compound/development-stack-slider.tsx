/** @jsx jsx */
import { Heading, jsx, SxStyleProp } from 'theme-ui'
import Slider from 'components/primitives/slider'
import { LogosCollectionFragment } from 'lib/contentful/generated'
import Logo from 'components/primitives/logo'

const sx: SxStyleProp = {
  display: 'inline-flex',
  mx: 3,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '8px',
  backgroundColor: 'background',
  p: '15px 25px',
  height: '82px',
  minWidth: '250px'
}

const DevelopmentStackSlider = ({
  tagline,
  logosCollection
}: LogosCollectionFragment) => (
  <div sx={{ textAlign: 'center' }}>
    {tagline && (
      <Heading
        as="h1"
        sx={{
          mb: 4,
          color: 'gray1',
          fontWeight: '600',
          letterSpacing: '0px',
          px: 2
        }}
        variant="heading.3"
      >
        {tagline}
      </Heading>
    )}
    <div
      sx={{
        display: ['none', null, 'flex'],
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '1300px',
        mx: 'auto',
        flexWrap: 'wrap',
        mt: 5
      }}
    >
      {logosCollection?.items.map((s) => (
        <Logo
          {...s}
          key={s?.name}
          pushSx={{
            ...sx,
            flexWrap: 'wrap',
            padding: '35px 70px',
            margin: '3px 11.2px 24.5px 11.2px',
            height: '100px',
            width: '250px',
            alignContent: 'center',
            boxShadow: 'cardInteractive',
            transition: 'box-shadow .2s',
            ':hover': {
              boxShadow: 'cardHover'
            }
          }}
        />
      ))}
    </div>
    <Slider
      pushSx={{
        display: ['block', null, 'none']
      }}
      duration={1.5}
    >
      {logosCollection?.items.map((s) => (
        <Logo
          key={s?.name}
          {...s}
          pushSx={{
            ...sx,
            height: '82px',
            width: '350px',
            p: '15px 25px',
            boxShadow:
              '0px 1px 1px rgba(0, 0, 0, 0.06), 0px 5px 25px rgba(0, 0, 0, 0.03)',
            '&>img': {
              maxWidth: '250px',
              width: 'fit-content',
              margin: 'auto'
            }
          }}
        />
      ))}
    </Slider>
  </div>
)

export default DevelopmentStackSlider
