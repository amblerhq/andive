import React from 'react'

import Incident from '../../../img/icons/incident.svg'
import Icon from '../icon'

const IncidentIcon = props => {
  return (
    <Icon {...props}>
      <Incident />
    </Icon>
  )
}

IncidentIcon.size = 24

export default IncidentIcon
export const IncidentSvg = Incident
