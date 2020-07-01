import React from 'react'

import Fleet from '../../../img/icons/fleet.svg'
import Icon from '../icon'
import {palette} from '../..'

const FleetIcon = ({color = palette.white, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <Fleet />
    </Icon>
  )
}

FleetIcon.size = 24

export default FleetIcon
export const FleetSvg = Fleet
