import { Suspense } from 'react'
import Card from '../../common/Card'
import Subtitle from '../../common/Card/Subtitle'
import Title from '../../common/Card/Title'
import { CardProps } from '../types'
import Image from 'next/image'

const CardComponent = ({ title, subtitle, icon }: CardProps) => {
  return (
    <Card>
      <Suspense fallback={null}>
        <Image
          quality={100}
          width={icon.width}
          height={icon.height}
          src={icon.image}
        />
      </Suspense>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Card>
  )
}

export default CardComponent
