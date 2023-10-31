import { useEffect, useState } from 'react'
import listAndCardDetailBuilder from './listAndCardDetailBuilder.module.css'
import DetailCard from '../builder/DetailCard'
import { LinkAndCardDetailSectionProps } from '../types'

const LinkAndCardDetailSection = ({
  blocksCollection
}: LinkAndCardDetailSectionProps) => {
  const [linkToDetails, setLinkToDetails] = useState([] as any[])
  const [activeDetails, setActiveDetails] = useState({
    id: '',
    icon: '',
    title: ''
  })

  const getCardDetailComponent = () => {
    const item = blocksCollection?.items.find((item, i) => {
      if (item?.title + i === activeDetails.id) {
        return true
      }
    }) as any

    return <DetailCard {...item} />
  }

  useEffect(() => {
    const ids =
      blocksCollection?.items.map((item, index) => {
        return {
          id: (item?.title as any) + index,
          icon: item.icon,
          title: item?.linkTitle as any
        }
      }) || []
    setLinkToDetails([...ids])
    setActiveDetails(ids[0] as any)
  }, [])

  return (
    <section
      style={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center'
      }}
    >
      <div
        className={listAndCardDetailBuilder.container}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          width: '100%'
        }}
      >
        <div
          className={listAndCardDetailBuilder.linkContainer}
          style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          {linkToDetails?.map((item, _i) => {
            const { id, icon, title } = item
            return (
              <div
                key={id}
                style={{
                  display: 'flex',
                  textAlign: 'left',
                  marginTop: 0
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
                      className={`fa-thin fa-${icon} `}
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
        </div>
        <div
          className={listAndCardDetailBuilder.detailContainer}
          style={{
            flex: 1
          }}
        >
          {getCardDetailComponent()}
        </div>
      </div>
    </section>
  )
}

export default LinkAndCardDetailSection
