import React from 'react'

import Incident from '../../../img/icons/incident.svg'
import SvgIcon from '../svg-icon'

const IncidentIcon = props => {
  return (
    <SvgIcon {...props}>
      <Incident />
    </SvgIcon>
  )
}

IncidentIcon.size = 24

export default IncidentIcon
export const IncidentSvg = Incident
