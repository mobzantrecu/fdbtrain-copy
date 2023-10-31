import Card from '../../common/Card'
import Subtitle from '../../common/Card/Subtitle'
import Title from '../../common/Card/Title'
import Link from '../../common/Button/Link'
import { CardProps } from '../types'

const CardComponent = ({ title, subtitle, link }: CardProps) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <Link href={link.href} target={link.target} title={link.title} />
    </Card>
  )
}

export default CardComponent
