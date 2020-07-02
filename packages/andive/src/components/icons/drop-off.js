import React from 'react'

import DropOff from '../../../img/icons/drop-off.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DropOffIcon = ({color = palette.darkPrimary, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <DropOff />
    </SvgIcon>
  )
}

DropOffIcon.size = 24

export default DropOffIcon
export const DropOffSvg = DropOff
