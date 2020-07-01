import React from 'react'

import DropOff from '../../../img/icons/drop-off.svg'
import Icon from '../icon'
import {palette} from '../..'

const DropOffIcon = ({color = palette.darkPrimary, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <DropOff />
    </Icon>
  )
}

DropOffIcon.size = 24

export default DropOffIcon
export const DropOffSvg = DropOff
