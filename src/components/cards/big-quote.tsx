/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
React

import { jsx, Card } from 'theme-ui'

import { QuoteFragment } from 'lib/contentful/generated'
import ClampedText from 'components/primitives/clamped-text'

interface QuoteProps {
  rotate?: boolean
}

const QuoteIcon: React.FC<QuoteProps> = ({ rotate }: QuoteProps) => {
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

const BigQuote = ({ quote, person, logo }: QuoteFragment) => {
  return (
    <Card
      sx={{
        padding: ['24px 32px', '40px 56px'],
        bg: 'background',
        borderBottom: '1px solid',
        borderColor: 'border',
        boxShadow: 'card',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%'
      }}
    >
      <div
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          mb: '25px'
        }}
      >
        <i sx={{ alignSelf: 'start' }}>
          <QuoteIcon />
        </i>
        <p
          sx={{
            fontSize: '16px',
            lineHeight: '25px',
            width: '100%',
            mt: '34px',
            mb: '9px'
          }}
        >
          <ClampedText availableHeight={180}>{quote}</ClampedText>
        </p>
        <p
          sx={{
            fontSize: '14px',
            fontWeight: '500',
            lineHeight: '22px'
          }}
        >
          {person?.name}, {person?.position}
        </p>
      </div>
      <i sx={{ alignSelf: 'end', mb: 3 }}>
        <QuoteIcon rotate />
      </i>
      <img
        src={logo?.image?.url ?? ''}
        alt={quote ?? 'quote image'}
        sx={{
          maxHeight: ['22px', '30px'],
          objectFit: 'cover',
          alignSelf: 'flex-start'
        }}
      />
    </Card>
  )
}

export default BigQuote
