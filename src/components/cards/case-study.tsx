/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
React

import { jsx, Card, Text } from 'theme-ui'
import { QuoteFragment } from 'lib/contentful/generated'
import Link from 'components/primitives/link'
import withHighlightedText from 'lib/contentful/renderers/highlight'
import ClampedText from 'components/primitives/clamped-text'
import Image from 'next/image'

type Props = QuoteFragment & { className?: string; isInSlider?: boolean }

interface QuoteProps {
  rotate?: boolean
}

const Quotes: React.FC<QuoteProps> = ({ rotate }: QuoteProps) => {
  return (
    <svg
      width="41"
      height="33"
      viewBox="0 0 41 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: rotate ? 'rotate(180deg)' : '' }}
    >
      <path
        d="M13.8745 1.54812C12.7334 0.632059 11.1102 0.570682 9.99422 1.51719C4.19617 6.43457 0 13.8719 0 21.9027C0 29.0575 4.27698 33 9.14389 33C13.5683 33 16.9604 29.4956 16.9604 25.2611C16.9604 20.8805 14.0108 17.8142 9.8813 17.8142C8.84956 17.8142 8.04657 17.0672 8.3272 16.0743C9.17609 13.0711 11.2931 9.82397 13.9022 7.23466C15.4847 5.6643 15.613 2.94372 13.8745 1.54812ZM37.4717 1.54812C36.3305 0.632059 34.7074 0.570682 33.5913 1.51719C27.7933 6.43457 23.5971 13.8719 23.5971 21.9027C23.5971 29.0575 27.8741 33 32.741 33C37.1655 33 40.705 29.4956 40.705 25.2611C40.705 20.8805 37.6079 17.8142 33.4784 17.8142C32.4574 17.8142 31.6742 17.0608 31.9657 16.0823C32.8596 13.0813 34.932 9.83599 37.5095 7.24633C39.0822 5.66623 39.2102 2.94372 37.4717 1.54812Z"
        fill="#363A3D"
      />
    </svg>
  )
}

const CaseStudyCard = ({
  logo,
  quote,
  className,
  action,
  person,
  isInSlider
}: Props) => (
  <Card
    className={className}
    sx={{
      p: ['', isInSlider ? '80px 80px 161px 80px' : '103px 103px 83px 123px'],
      display: 'flex',
      height: isInSlider ? '365px' : '',
      flexDirection: 'column',
      justifyContent: 'space-between',
      border: 0,
      boxShadow: 'card'
    }}
  >
    <div
      sx={{
        position: 'absolute',
        top: [10, 44],
        left: [10, 37]
      }}
    >
      <Quotes />
    </div>
    <div>
      <Text
        sx={{
          color: 'gray10',
          mt: ['20px', ''],
          lineHeight: 1.182,
          fontSize: '22px !important'
        }}
        variant="xl"
      >
        <ClampedText availableHeight={180}>
          {withHighlightedText(quote)}
        </ClampedText>
      </Text>
      {person && (
        <Text
          sx={{ mt: 25, mb: 3, fontWeight: 600, fontSize: 14, color: 'gray10' }}
        >
          &#8211; {person?.name} - {person?.position}
        </Text>
      )}
      {action && <Link variant="accent" arrow {...action} sx={{ mt: 3 }} />}
    </div>
    <div
      sx={{
        position: 'absolute',
        bottom: [10, isInSlider ? 100 : 50],
        right: [10, isInSlider ? 38 : 55]
        /*  mb: [0, 5] */
      }}
    >
      <Quotes rotate />
    </div>
    <div
      sx={{
        mt: 3,
        position: 'absolute',
        width: ['100px', '136px'],
        bottom: [0, isInSlider ? 56 : 26],
        left: [2, isInSlider ? 78 : 51],
        display: ['none', 'block']
      }}
    >
      {logo?.image?.url && (
        <Image
          src={logo?.image?.url ?? ''}
          alt={logo?.image?.title ?? ''}
          width={logo?.image?.width ?? ''}
          height={logo?.image?.height ?? ''}
        />
      )}
    </div>
  </Card>
)

export default CaseStudyCard
