import React from 'react'

import DropOff from '../../../img/icons/drop-off.svg'
import Icon from '../icon'

const DropOffIcon = props => {
  return (
    <Icon {...props}>
      <DropOff />
    </Icon>
  )
}

DropOffIcon.size = 24

export default DropOffIcon
export const DropOffSvg = DropOff
