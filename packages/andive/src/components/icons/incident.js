import React from 'react'

import Incident from '../../../img/icons/incident.svg'
import Icon from '../icon'
import {palette} from '../..'

const IncidentIcon = ({color = palette.darkPotatoYellow, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <Incident />
    </Icon>
  )
}

IncidentIcon.size = 24

export default IncidentIcon
export const IncidentSvg = Incident
