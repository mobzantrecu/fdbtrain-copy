/** @jsx jsx */
import { jsx, Heading } from 'theme-ui'
import SectionLayout from 'components/layouts/section'
import { SectionFragment } from 'lib/contentful/generated'
import Link from 'components/primitives/link'

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
        fill="#F7F9FA"
      />
    </svg>
  )
}

const OneBigQuote = ({
  title,
  blocksCollection,
  actionsCollection,
  anchorLinkId,
  backgroundImage
}: SectionFragment) => {
  const quoteBlock =
    blocksCollection?.items[0]?.__typename === 'Quote2'
      ? blocksCollection?.items[0]
      : null

  return (
    <SectionLayout
      anchorId={anchorLinkId}
      isHero
      title={{ text: title }}
      pushSx={{
        background: `url(${backgroundImage?.url})`,
        backgroundSize: 'cover',
        color: 'gray1',
        height: '537px'
      }}
      headingContainerPushSx={{
        mt: 4,
        '&>h1': {
          fontWeight: 600
        }
      }}
    >
      <div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          alignItems: 'center',
          overflowX: 'hidden'
        }}
      >
        <div
          sx={{
            width: '100%',
            display: 'flex',
            maxWidth: '915px',
            ml: '85px',
            position: 'relative',
            top: ['0px', '15px'],
            left: ['0px', '35px']
          }}
        >
          <Quotes />
        </div>
        <Heading
          variant="heading"
          sx={{
            fontSize: ['25px', '25px', '32px'],
            lineHeight: '40px',
            width: '100%',
            maxWidth: ['400px', '500px', '780px'],
            px: [3, 2, 5],
            textAlign: 'center',
            mt: ['', '35px', '35px', '0']
          }}
        >
          {quoteBlock?.quote}
        </Heading>
        <div
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'right',
            maxWidth: '915px',
            mr: '85px',
            mb: ['8vw', '10px', '25px', '25px'],
            mt: ['', '35px', '0'],
            position: 'relative',
            bottom: ['0px', '15px'],
            right: ['0px', '35px']
          }}
        >
          <Quotes rotate />
        </div>
        <div
          sx={{
            width: '100%',
            display: 'flex',
            maxWidth: '760px',
            margin: ['0', '35px 0', '16px 0 0 15px'],
            justifyContent: 'flex-end',
            alignItems: 'center'
          }}
        >
          {actionsCollection?.items[0] && (
            <Link
              sx={{ display: 'block', alignSelf: 'flex-end' }}
              variant="accentLight"
              {...actionsCollection?.items[0]}
              arrow
            >
              Join our mission
            </Link>
          )}
        </div>
      </div>
    </SectionLayout>
  )
}

export default OneBigQuote
