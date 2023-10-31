import Link from './Link'
import PurpleButton from './PurpleButton'
import WhiteButton from './WhiteButton'
import ButtonProps from './types'

const getButton = (props: ButtonProps) => {
  switch (props.variant) {
    case 'Purple':
      return <PurpleButton {...props} />
    case 'White':
      return <WhiteButton {...props} />
    case 'Link':
      return <Link {...props} />
    default:
      return <PurpleButton {...props} />
  }
}

export default getButton
