import Image from 'next/image'

import { Suspense } from 'react'
import Quote from '../../QuotesGrid/QuoteCardComponent/QuoteIcon'
import quoteCardStyles from '../../QuotesGrid/QuoteCardComponent/quoteCard.module.css'
import { CardProps } from '../../QuotesGrid/types'
import Card from '../../common/Card'

const CardComponent = ({ text, author, image, className }: CardProps) => {
  return (
    <Card layoutComponentClasses={`${className} ${quoteCardStyles.quoteCard}`}>
      <div
        className={`${quoteCardStyles.quoteIcon} ${quoteCardStyles.quoteTop}`}
      >
        <Quote />
      </div>
      <p className={quoteCardStyles.quoteText}>{text}</p>
      <p className={quoteCardStyles.quoteAuthor}>{author}</p>
      <div
        className={`${quoteCardStyles.quoteIcon} ${quoteCardStyles.quoteBottom}`}
      >
        <Quote rotate />
      </div>
      <div className={quoteCardStyles.logo}>
        {image && (
          <Suspense fallback={null}>
            <Image
              width={image.width}
              height={image.height}
              src={image.image}
              alt={image.image}
            />
          </Suspense>
        )}
      </div>
    </Card>
  )
}

export default CardComponent
