/** @jsx jsx */
import { jsx, Heading, Text, Grid } from 'theme-ui'
import { SectionBlockFragment } from 'lib/contentful/generated'
import defaultRenderer from 'lib/contentful/renderers'
import Link from 'components/primitives/link'
import withHighlightedText from 'lib/contentful/renderers/highlight'
import AspectRatio from 'components/primitives/aspect-ratio'

type Props = SectionBlockFragment & { invert?: boolean }

const WideSectionBlockWithImage = ({
  title,
  subtitle,
  media,
  actionsCollection,
  invert
}: Props) => (
  <Grid
    columns={[1, null, 'repeat(2, fit-content(50%))']}
    gap={[4, null, null, 4]}
    sx={{
      mx: 'auto',
      gridAutoFlow: 'dense',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'gray2'
    }}
  >
    <div
      sx={{
        gridColumn: invert ? ['1', null, '2'] : '1',
        height: '100%',
        minHeight: '250px',
        maxHeight: '450px',
        width: ['100%', null, '525px']
      }}
    >
      <AspectRatio ratio={497 / 300}>
        <div
          sx={{
            height: '100%',
            width: '100%',
            variant: 'gradients.soft',
            border: '1px solid',
            borderColor: 'border',
            boxShadow: 'cardNew',
            borderRadius: 'md',
            overflow: 'hidden',
            gridColumn: invert ? ['1', null, '2'] : '1'
          }}
        >
          <img
            src={media?.url ?? ''}
            alt={media?.title ?? ''}
            sx={{ objectFit: 'cover', width: '100%', height: '100%' }}
          />
        </div>
      </AspectRatio>
    </div>
    <div>
      <Heading as="h1" sx={{ mb: 3, fontSize: '32px', fontWeight: 600 }}>
        {withHighlightedText(title)}
      </Heading>
      <Text variant="small" sx={{ mb: 3, 'p:not(:last-of-type)': { mb: 3 } }}>
        {defaultRenderer(subtitle?.json)}
      </Text>
      {actionsCollection?.items.map((action) => (
        <Link
          {...action}
          key={action?.href}
          sx={{ ':not(:last-of-type)': { mr: 3 } }}
          variant="accent"
          arrow
        />
      ))}
    </div>
  </Grid>
)

export default WideSectionBlockWithImage
