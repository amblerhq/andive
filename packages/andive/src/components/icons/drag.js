import React from 'react'

import Drag from '../../../img/icons/drag.svg'
import SvgIcon from '..//svg-icon'

const DragIcon = props => {
  return (
    <SvgIcon {...props}>
      <Drag />
    </SvgIcon>
  )
}

DragIcon.size = 24

export default DragIcon
export const DragSvg = Drag
