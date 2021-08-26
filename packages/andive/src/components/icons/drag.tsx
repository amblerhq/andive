import React from 'react'

import Drag from '../../../img/icons/drag.svg'
import SvgIcon from '../svg-icon'

const DEFAULT_SIZE = 24

const DragIcon = ({color = '#ddd', size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Drag />
    </SvgIcon>
  )
}

DragIcon.size = DEFAULT_SIZE

export default DragIcon
export const DragSvg = Drag
