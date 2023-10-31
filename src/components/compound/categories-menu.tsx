/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
React

import { jsx } from 'theme-ui'
import { SectionType } from 'components/sections'
import { SectionFragment } from 'lib/contentful/generated'
import { useMemo } from 'react'
import slugify from '@sindresorhus/slugify'
import Link from 'components/primitives/link'
import ROUTES from 'lib/routes'
import { useRouter } from 'next/dist/client/router'
import ViewportWidthBox from 'components/layouts/viewport-width-box'

type Category = { label: string; id: string }

const getCategoryId = (title: string) => slugify(title)

type Props = {
  sections: (SectionFragment | null)[] | null | undefined
  partnersPage?: boolean
  isResources?: boolean
}

const CategoriesMenu = ({ sections, partnersPage, isResources }: Props) => {
  const router = useRouter()
  const { category: queryCategory } = router.query

  const categories: Category[] = useMemo(() => {
    if (!sections) return []
    const all = sections?.map((section) => {
      if (!section) return null
      if (
        !(
          section.type === SectionType.MediaBlocksGrid ||
          section.type === SectionType.CustomersGrid
        )
      ) {
        return null
      }
      if (!section.title) return null
      return { label: section.title, id: getCategoryId(section.title) }
    })
    return [
      { label: 'All', id: 'all' },
      ...(all.filter((c) => !!c) as Category[])
    ]
  }, [sections])

  return (
    <ViewportWidthBox
      sx={{
        overflowX: 'auto',
        display: 'flex',
        zIndex: 20,
        px: [3, 0],
        mb: !isResources ? '-17px' : ''
      }}
    >
      <div
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mx: 'auto',
          borderBottom: '1px solid #DBDFE1'
        }}
      >
        {categories.map((category) => {
          const categoriesWithoutAll = categories.filter((c) => c.id !== 'all')
          const isSelected = category.id === queryCategory
          const allSelected =
            category.id === 'all' &&
            categoriesWithoutAll.filter((c) => c.id === queryCategory).length <
              1

          return (
            <Link
              key={category.id}
              href={
                partnersPage
                  ? ROUTES.partnersByCategory(category.id)
                  : ROUTES.resourcesByCategory(category.id)
              }
              variant="noUnderline"
              sx={{
                height: '40px',
                px: '10px',
                fontSize: '14px',
                display: 'inline-flex',
                alignItems: 'center',
                ...(isSelected || allSelected
                  ? {
                      color: 'primary',
                      borderBottom: '2px solid',
                      borderColor: 'primary',
                      fontWeight: 600,
                      '&:hover': {
                        color: 'primary',
                        textDecoration: 'none'
                      },
                      '&:focus': {
                        color: 'primary',
                        textDecoration: 'none'
                      }
                    }
                  : {})
              }}
            >
              {category.label}
            </Link>
          )
        })}
      </div>
    </ViewportWidthBox>
  )
}

export default CategoriesMenu
export { getCategoryId }
