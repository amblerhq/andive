import React from 'react'

import Drag from '../../../img/icons/drag.svg'
import Icon from '../icon'

const DragIcon = props => {
  return (
    <Icon {...props}>
      <Drag />
    </Icon>
  )
}

DragIcon.size = 24

export default DragIcon
export const DragSvg = Drag
