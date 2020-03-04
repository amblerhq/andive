import React from 'react'

import Fleet from '../../../img/icons/fleet.svg'
import Icon from '../icon'

const FleetIcon = props => {
  return (
    <Icon {...props}>
      <Fleet />
    </Icon>
  )
}

FleetIcon.size = 24

export default FleetIcon
export const FleetSvg = Fleet
