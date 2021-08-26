import React from 'react'

import DropOff from '../../../img/icons/drop-off.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const DropOffIcon = ({color = palette.darkPrimary, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <DropOff />
    </SvgIcon>
  )
}

DropOffIcon.size = DEFAULT_SIZE

export default DropOffIcon
export const DropOffSvg = DropOff
