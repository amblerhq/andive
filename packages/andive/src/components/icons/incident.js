import React from 'react'

import Incident from '../../../img/icons/incident.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const IncidentIcon = ({color = palette.darkPotatoYellow, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <Incident />
    </SvgIcon>
  )
}

IncidentIcon.size = 24

export default IncidentIcon
export const IncidentSvg = Incident
