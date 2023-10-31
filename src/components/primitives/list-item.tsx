/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
React

import { jsx } from 'theme-ui'

interface ListItemComponent {
  text: unknown
  arrowSrc: string
}

const ListItemComponent = ({ text, arrowSrc }: ListItemComponent) => (
  <div
    className="hasArrow"
    sx={{ display: 'flex', alignItems: 'flex-start', mb: '8px' }}
  >
    <div
      sx={{
        minHeight: '12px',
        minWidth: '12px',
        marginRight: '7px',
        marginTop: '5px'
      }}
    >
      <img src={arrowSrc} width={12} height={12} />
    </div>

    {text}
  </div>
)

export default ListItemComponent
