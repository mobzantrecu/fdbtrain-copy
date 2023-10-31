import { differenceInDays, format } from 'date-fns'
import { today, toUTC } from 'lib/util/time'
import { PersonFragment } from 'lib/contentful/generated'

const postIsNew = (blogPostDate: string) => {
  const date = toUTC(blogPostDate)
  return differenceInDays(today, date) <= 14
}

const formatDate = (blogPostDate: string) => {
  const date = toUTC(blogPostDate)
  return format(date, 'MMM do, yyyy')
}

const renderAuthors = (
  authors: (PersonFragment | null)[] | null | undefined
) => {
  if (!authors || !authors.length) return null
  return (
    <>
      {authors.map((author, i, { length }) => {
        if (!author) return null
        const withComma = i < length - 2
        const withAmper = i === length - 2
        return (
          <span key={author.name as any}>
            <span>{author.name}</span>
            {withComma && ', '}
            {withAmper && <>&nbsp;&&nbsp;</>}
          </span>
        )
      })}
    </>
  )
}

export { postIsNew, formatDate, renderAuthors }
