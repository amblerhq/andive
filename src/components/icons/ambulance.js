import React from 'react'

import Ambulance from '../../../img/icons/ambulance.svg'
import Icon from '../icon'

const AmbulanceIcon = props => {
  return (
    <Icon {...props}>
      <Ambulance />
    </Icon>
  )
}

AmbulanceIcon.size = 24

export default AmbulanceIcon
export const AmbulanceSvg = Ambulance
