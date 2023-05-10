import React, { FC } from 'react'
import cn from 'classnames'

import { PropTypes } from './Divider.types'
import defaultClassName from '../../css/defaultClassName'

//import "./Divider.css";

const Divider: FC<PropTypes> = ({ children }) => {
  const dividerClass = cn(defaultClassName, 'divider')
  const dividerBarClass = cn(defaultClassName, 'divider', 'bar')
  const dividerContentClass = cn(defaultClassName, 'divider', 'content')

  return (
    <div className={dividerClass}>
      <div className={dividerBarClass} />
      <div className={dividerContentClass}>{children}</div>
      <div className={dividerBarClass} />
    </div>
  )
}

export default Divider
