import React from 'react'

import Bell from '../../../img/icons/bell.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const BellIcon = ({color = palette.darkPrimary, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Bell />
    </SvgIcon>
  )
}

BellIcon.size = DEFAULT_SIZE

export default BellIcon
export const BellSvg = Bell
