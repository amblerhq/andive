import React from 'react'

import Fleet from '../../../img/icons/fleet.svg'
import SvgIcon from '../svg-icon'

const FleetIcon = props => {
  return (
    <SvgIcon {...props}>
      <Fleet />
    </SvgIcon>
  )
}

FleetIcon.size = 24

export default FleetIcon
export const FleetSvg = Fleet
