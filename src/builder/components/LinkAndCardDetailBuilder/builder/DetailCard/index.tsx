import Image from 'next/image'

import detailCardStyles from './detailCardStyles.module.css'
import MarkdownBodyBuilder from '../../../MarkdownBody'
import { Items } from '../../types'

const DetailCard = ({ title, subtitle, backgroundImage }: Items) => {
  const subtitleWithBackground = backgroundImage
    ? detailCardStyles.subtitleContainerWithBackground
    : ''

  return (
    <div className={detailCardStyles.container}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'left',
          gap: 20
        }}
      >
        <div>
          <MarkdownBodyBuilder text={title} />
        </div>
        <div
          className={`${detailCardStyles.subtitleContainer} ${subtitleWithBackground}`}
        >
          <MarkdownBodyBuilder text={subtitle} />
        </div>
      </div>
      {backgroundImage && (
        <div>
          <Image
            src={backgroundImage}
            alt={backgroundImage}
            width={270}
            objectFit="contain"
            height={180}
            layout="intrinsic"
            quality={100}
          />
        </div>
      )}
    </div>
  )
}

export default DetailCard
