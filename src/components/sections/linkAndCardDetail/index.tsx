import {
  CallToAction,
  SectionBlock,
  SectionBlockSubtitle,
  SectionFragment
} from 'lib/contentful/generated'
import Image from 'next/image'

import { useEffect, useState } from 'react'
import { Box, Heading, Text } from 'theme-ui'
import defaultRenderer from '../../../lib/contentful/renderers'
import withHighlightedText from '../../../lib/contentful/renderers/highlight'
import Link from '../../primitives/link'

type Props = Pick<SectionBlock, 'title' | 'icon'> & {
  subtitle?: Pick<SectionBlockSubtitle, 'json'> | null
  backgroundImage?: any
  isLarge?: boolean
  actionsCollection?: {
    items: (Pick<CallToAction, 'children' | 'href'> | null)[]
  } | null
}

type LinkAndCardDetailSectionProps = SectionFragment & {
  isFixed?: boolean | undefined
  isHome?: boolean
}

const DetailCard = ({
  title,
  subtitle,
  actionsCollection,
  backgroundImage
}: Props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        borderRadius: '4px',
        flexWrap: ['wrap', 'wrap', 'wrap', 'wrap', 'initial', 'initial'],
        justifyContent: [
          'center',
          'center',
          'center',
          backgroundImage ? 'center' : 'space-between',
          'space-between',
          'space-between'
        ],
        minHeight: ['unset', 'unset', 'unset', 'unset', 'unset', '287px'],
        maxHeight: ['unset', 'unset', 'unset', 'unset', 'unset', '287px'],
        padding: '32px',
        background: '#FFFFFF',
        height: ['420px', '420px', '420px', '420px', '251px', '100%'],
        '@media screen and (max-width: 460px)': {
          height: '500px'
        },
        '@media screen and (max-width: 340px)': {
          height: '560px'
        },
        '@media screen and (max-width: 290px)': {
          height: '650px'
        }
      }}
    >
      <Box
        sx={
          {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flexStart',
            textAlign: 'left'
          } as any
        }
      >
        <Heading
          sx={{
            mb: '10px',
            fontWeight: '600',
            fontSize: '28px',
            color: '#363A3D'
          }}
        >
          {withHighlightedText(title)}
        </Heading>
        <Text
          sx={{
            lineHeight: '24px',
            mt: 0,
            fontSize: '1rem',
            mb: '10px',
            maxWidth: [
              'none',
              'none',
              'none',
              'none',
              '544px',
              backgroundImage ? '344px' : 'none'
            ],
            color: '#363A3D'
          }}
        >
          {defaultRenderer(subtitle?.json)}
        </Text>
        {actionsCollection?.items[0] && (
          <Link {...actionsCollection?.items[0]} variant="accent" arrow />
        )}
      </Box>
      {backgroundImage && (
        <Box>
          <Image
            src={backgroundImage?.url ?? ''}
            alt={backgroundImage?.title ?? ''}
            width={270}
            objectFit="contain"
            height={180}
            layout="intrinsic"
            quality={100}
          />
        </Box>
      )}
    </Box>
  )
}

const LinkAndCardDetailSection = ({
  blocksCollection,
  title,
  isHome
}: LinkAndCardDetailSectionProps) => {
  const [linkToDetails, setLinkToDetails] = useState([] as any[])
  const [activeDetails, setActiveDetails] = useState({
    id: '',
    icon: '',
    title: ''
  })

  const getCardDetailComponent = () => {
    const block = blocksCollection?.items.find((item, i) => {
      if (
        item?.__typename === 'SectionBlock' &&
        (item?.title as any) + i === activeDetails.id
      ) {
        return true
      }
    }) as any

    return <DetailCard {...block} />
  }

  useEffect(() => {
    const ids =
      blocksCollection?.items.map((item, index) => {
        if (item?.__typename === 'SectionBlock') {
          return {
            id: (item?.title as any) + index,
            icon: item.icon,
            title: item?.title as any
          }
        }
      }) || []
    setLinkToDetails([...ids])
    setActiveDetails(ids[0] as any)
  }, [])

  return (
    <Box
      sx={
        {
          minHeight: '430px',
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          flexDirection: 'column',
          textAlign: 'center',
          px: ['32px', '100px', '100px', '192px', '192px'],
          py: ['64px', null, '80px'],
          background: '#1F1244',
          paddingTop: isHome ? '170px !important' : 'inherit'
        } as any
      }
    >
      <Heading as="h1" variant="heading.4" sx={{ mb: '40px', color: 'white' }}>
        {withHighlightedText(title)}
      </Heading>
      <Box
        sx={
          {
            gap: ['30px', '30px', '30px', '30px', '30px', '100px'],
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            width: '100%',
            maxWidth: '1172px'
          } as any
        }
      >
        <Box
          sx={{
            order: [2, 2, 2, 2, 2, 1],
            flexWrap: ['wrap', 'wrap', 'wrap', 'wrap', 'wrap', 'initial'],
            gap: ['20px', '20px', '20px', '20px', '20px', 0],
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: ['row', 'row', 'row', 'row', 'row', 'column']
          }}
        >
          {linkToDetails?.map((item, i) => {
            const { id, icon, title } = item
            return (
              <div
                key={id}
                sx={{
                  marginTop: i === 0 ? 0 : [0, null, null, null, '14px']
                }}
                style={{
                  display: 'flex',
                  textAlign: 'left'
                }}
              >
                <div
                  style={{
                    width: '50px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  {icon && (
                    <i
                      className={`fa-thin ${icon} `}
                      style={{
                        fontSize: '40px',
                        display: 'inline-flex',
                        justifyContent: 'center',
                        alignItems: 'start',
                        color: '#6742F1'
                      }}
                    ></i>
                  )}
                </div>

                <a
                  style={{
                    cursor: 'pointer',
                    color: activeDetails.id === item.id ? '#896BFF' : 'white',
                    fontSize: '22px',
                    fontWeight: 600,
                    alignSelf: 'center',
                    marginLeft: '20px'
                  }}
                  onClick={() => setActiveDetails({ ...item })}
                >
                  {title}
                </a>
              </div>
            )
          })}
        </Box>
        <Box
          sx={{
            order: [1, 1, 1, 1, 1, 2],
            flex: 1,
            minHeight: ['0', '0', '0', '0', '256px', '256px'],
            width: ['100%', '100%', '100%', '100%', 'initial']
          }}
        >
          {getCardDetailComponent()}
        </Box>
      </Box>
    </Box>
  )
}

export default LinkAndCardDetailSection
