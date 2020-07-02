import React from 'react'

import Drag from '../../../img/icons/drag.svg'
import SvgIcon from '../svg-icon'

const DragIcon = ({color = '#ddd', ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <Drag />
    </SvgIcon>
  )
}

DragIcon.size = 24

export default DragIcon
export const DragSvg = Drag
