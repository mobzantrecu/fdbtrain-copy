import Link from 'components/primitives/link'
import { LinkFragment } from 'lib/contentful/generated'

type Props = {
  actions: (LinkFragment | null)[] | undefined | null
  linkProps: React.ComponentPropsWithoutRef<typeof Link>
}

const SideBySideLinks = ({ actions, linkProps }: Props) =>
  actions ? (
    <div>
      {actions.map((a, i) => (
        <Link
          {...a}
          key={i}
          sx={{ ':not(:last-of-type)': { mr: 3 }, fontWeight: '600' }}
          {...linkProps}
        />
      ))}
    </div>
  ) : null

export default SideBySideLinks
