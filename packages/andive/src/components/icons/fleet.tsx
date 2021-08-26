import React from 'react'

import Fleet from '../../../img/icons/fleet.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 40

const FleetIcon = ({color = palette.white, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Fleet />
    </SvgIcon>
  )
}

FleetIcon.size = DEFAULT_SIZE

export default FleetIcon
export const FleetSvg = Fleet
