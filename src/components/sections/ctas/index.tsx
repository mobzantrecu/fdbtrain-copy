/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'components/primitives/link'
import { SectionFragment } from 'lib/contentful/generated'

const Ctas = ({ actionsCollection }: SectionFragment) => {
  return (
    <div
      sx={{
        mt: ['-38px', '-42px'],
        backgroundColor: 'gray2',
        display: 'flex',
        flexDirection: ['column', 'row'],
        justifyContent: 'center',
        alignItems: 'center',
        padding: '55px 48px 50px 48px',
        backgroundSize: 'cover'
      }}
    >
      {actionsCollection?.items.map((action, i) => {
        if (!action) return null
        const isFirst = i === 0
        return (
          <Link
            key={`${action?.href}-${i}`}
            variant={isFirst ? 'buttons.primary' : 'buttons.secondary'}
            sx={{
              mr: isFirst ? [0, '20px'] : '',
              mb: isFirst ? ['20px', 0] : '',
              variant: isFirst ? 'gradients.button' : '',
              width: ['100%', 'fit-content']
            }}
            {...action}
          />
        )
      })}
    </div>
  )
}

export default Ctas
