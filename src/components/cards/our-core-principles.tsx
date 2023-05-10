/** @jsx jsx */
import { SectionBlockFragment } from 'lib/contentful/generated'
import { jsx, Card } from 'theme-ui'

type Props = {
  className?: string
  title?: string
  content: SectionBlockFragment
}

const OurCorePrinciplesCard = ({ className, title, content }: Props) => {
  return (
    <Card
      sx={{
        p: [
          '40px 20px 40px 30px',
          '50px 40px 60px 50px',
          '70px 50px 50px 70px'
        ],
        boxShadow: 'card'
      }}
      className={className}
    >
      <div>
        <p
          sx={{
            fontWeight: 600,
            fontSize: '28px',
            mb: [2, 3],
            lineHeight: 1.5
          }}
        >
          {title}
        </p>
        <p
          sx={{
            fontSize: '22px',
            fontWeight: 400,
            lineHeight: '34px',
            pr: 4
          }}
        >
          {content}
        </p>
      </div>
    </Card>
  )
}

export default OurCorePrinciplesCard
