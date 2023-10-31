import Card from '../../common/Card'
import Subtitle from '../../common/Card/Subtitle'
import { CardProps } from '../types'
import Quote from './QuoteIcon'
import quoteCardStyles from './quoteCard.module.css'
import Image from 'next/image'

const CardComponent = ({ text, author, image, className }: CardProps) => {
  return (
    <Card layoutComponentClasses={`${className} ${quoteCardStyles.quoteCard}`}>
      <div
        className={`${quoteCardStyles.quoteIcon} ${quoteCardStyles.quoteTop}`}
      >
        <Quote />
      </div>
      <Subtitle>{text}</Subtitle>
      <Subtitle>{author}</Subtitle>
      <div
        className={`${quoteCardStyles.quoteIcon} ${quoteCardStyles.quoteBottom}`}
      >
        <Quote rotate />
      </div>
      <div className={quoteCardStyles.logo}>
        {image && (
          <Image width={image.width} height={image.height} src={image.image} />
        )}
      </div>
    </Card>
  )
}

export default CardComponent
