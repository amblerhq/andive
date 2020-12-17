import React from 'react'

import Bell from '../../../img/icons/bell.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const BellIcon = ({color = palette.darkPrimary, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <Bell />
    </SvgIcon>
  )
}

BellIcon.size = 24

export default BellIcon
export const BellSvg = Bell
