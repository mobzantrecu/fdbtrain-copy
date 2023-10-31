/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
React

import { jsx, Card } from 'theme-ui'

import SectionLayout from 'components/layouts/section'
import { LinkFragment, SectionFragment } from 'lib/contentful/generated'
import Link from 'next/link'

const Arrow = () => {
  return (
    <svg
      width="14"
      height="13"
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.25459 0.257034C7.33586 0.175557 7.43241 0.110915 7.5387 0.0668087C7.64499 0.0227025 7.75894 0 7.87402 0C7.9891 0 8.10305 0.0227025 8.20934 0.0668087C8.31563 0.110915 8.41218 0.175557 8.49345 0.257034L13.7428 5.50642C13.8243 5.58769 13.889 5.68424 13.9331 5.79053C13.9772 5.89682 13.9999 6.01077 13.9999 6.12585C13.9999 6.24093 13.9772 6.35488 13.9331 6.46117C13.889 6.56746 13.8243 6.66401 13.7428 6.74528L8.49345 11.9947C8.32917 12.1589 8.10635 12.2512 7.87402 12.2512C7.64169 12.2512 7.41887 12.1589 7.25459 11.9947C7.09031 11.8304 6.99802 11.6076 6.99802 11.3752C6.99802 11.1429 7.09031 10.9201 7.25459 10.7558L11.8863 6.12585L7.25459 1.49589C7.17312 1.41462 7.10847 1.31807 7.06437 1.21178C7.02026 1.10549 6.99756 0.991541 6.99756 0.876462C6.99756 0.761382 7.02026 0.647433 7.06437 0.541142C7.10847 0.43485 7.17312 0.338304 7.25459 0.257034Z"
        fill="#3736CD"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 6.12612C0 5.89408 0.0921767 5.67155 0.256252 5.50747C0.420327 5.3434 0.642861 5.25122 0.874898 5.25122H12.2486C12.4806 5.25122 12.7031 5.3434 12.8672 5.50747C13.0313 5.67155 13.1235 5.89408 13.1235 6.12612C13.1235 6.35816 13.0313 6.58069 12.8672 6.74477C12.7031 6.90884 12.4806 7.00102 12.2486 7.00102H0.874898C0.642861 7.00102 0.420327 6.90884 0.256252 6.74477C0.0921767 6.58069 0 6.35816 0 6.12612Z"
        fill="#3736CD"
      />
    </svg>
  )
}

const CardLinks = ({
  title,
  subtitle,
  blocksCollection,
  anchorLinkId
}: SectionFragment) => {
  const blocks = (blocksCollection?.items.filter(
    (b) => b?.__typename === 'CallToAction'
  ) ?? []) as LinkFragment[]

  return (
    <SectionLayout
      anchorId={anchorLinkId}
      title={{ text: title }}
      subtitle={subtitle?.json}
    >
      <div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%'
        }}
      >
        {blocks.map((item, i) => (
          <Link key={i} href={item?.href ?? ''} passHref>
            <Card
              as="a"
              sx={{
                bg: 'background',
                borderBottom: '1px solid',
                borderColor: 'border',
                borderRadius: '4px',
                boxShadow: '0px 3px 12px rgba(0, 0, 0, 0.04)',
                height: ['auto', '76px'],
                minHeight: '76px',
                padding: '12px 30px 12px 35px',
                width: '100%',
                maxWidth: '850px',
                mb: '10px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                transition: 'all 0.3s',
                ':hover': {
                  boxShadow: 'cardHover'
                }
              }}
            >
              <div
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '100%'
                }}
              >
                <p
                  sx={{
                    fontSize: ['14px', '16px', '18px', '20px'],
                    mr: '15px'
                  }}
                >
                  {item.children}
                </p>
                <i>
                  <Arrow />
                </i>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </SectionLayout>
  )
}

export default CardLinks
