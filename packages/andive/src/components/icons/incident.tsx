import React from 'react'

import Incident from '../../../img/icons/incident.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const IncidentIcon = ({color = palette.darkPotatoYellow, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Incident />
    </SvgIcon>
  )
}

IncidentIcon.size = DEFAULT_SIZE

export default IncidentIcon
export const IncidentSvg = Incident
