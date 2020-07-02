import React from 'react'

import Fleet from '../../../img/icons/fleet.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const FleetIcon = ({color = palette.white, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <Fleet />
    </SvgIcon>
  )
}

FleetIcon.size = 24

export default FleetIcon
export const FleetSvg = Fleet
