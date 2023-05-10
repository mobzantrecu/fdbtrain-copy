/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { getAsPath } from 'lib/util/router'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

type Props = {
  pages: number
  currentPage: number
  isInPage: boolean
  totalPosts: number
}

const Paginator = ({ pages, currentPage, isInPage, totalPosts }: Props) => {
  const maxPageOffset = pages - 4

  const [loaded, setLoaded] = useState(false)

  const router = useRouter()

  useEffect(() => {
    if (isInPage && !isNaN(currentPage) && !loaded) {
      setLoaded(true)
    }
  }, [isInPage, currentPage, loaded, maxPageOffset])

  async function handlePreviousPage() {
    const url = getAsPath(router.asPath, { page: currentPage.toString() })
    await router.push(url, url, { scroll: false })
    setLoaded(false)
  }

  async function handleNextPage() {
    const url = getAsPath(router.asPath, { page: (currentPage + 2).toString() })
    await router.push(url, url, { scroll: false })
    setLoaded(false)
  }

  return (
    <Flex
      sx={{
        width: '100%',
        alignItems: 'center',
        fontSize: 1,
        button: { transition: 'color .2s', p: 1, mx: 1 },
        'button:not(:disabled)': { ':hover': { color: 'primary' } },
        '@media screen and (max-width: 639px)': {
          mt: '5px'
        },
        transition: 'opacity .2s',
        ...(isNaN(pages) || pages <= 0
          ? {
              opacity: 0,
              visibility: 'hidden'
            }
          : {})
      }}
    >
      <div>
        <p>
          {currentPage * 12 + 1} -{' '}
          {currentPage * 12 + 12 < totalPosts
            ? currentPage * 12 + 12
            : totalPosts}{' '}
          of {totalPosts}
        </p>
      </div>
      <button
        aria-label="previous page"
        onClick={handlePreviousPage}
        sx={{
          opacity: currentPage === 0 ? 0.5 : 1,
          display: 'flex',
          alignItems: 'center',
          transition: 'opacity .2s'
        }}
        disabled={currentPage === 0}
      >
        <i
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <i className="fa-regular fa-chevron-left"></i>
        </i>
      </button>
      <button
        aria-label="next page"
        onClick={handleNextPage}
        sx={{
          opacity: currentPage + 1 === pages ? 0.5 : 1,
          display: 'flex',
          alignItems: 'center',
          transition: 'opacity .2s'
        }}
        disabled={currentPage + 1 === pages}
      >
        <i
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            ml: 1
          }}
        >
          <i className="fa-regular fa-chevron-right"></i>
        </i>
      </button>
    </Flex>
  )
}

export default Paginator
