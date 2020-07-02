import React from 'react'

import Ambulance from '../../../img/icons/ambulance.svg'
import Icon from '../icon'
import {palette} from '../..'

const AmbulanceIcon = ({color = palette.darkPrimary, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <Ambulance />
    </Icon>
  )
}

AmbulanceIcon.size = 22

export default AmbulanceIcon
export const AmbulanceSvg = Ambulance
