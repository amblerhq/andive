import React from 'react'

import Ambulance from '../../../img/icons/ambulance.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const AmbulanceIcon = ({color = palette.darkPrimary, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <Ambulance />
    </SvgIcon>
  )
}

AmbulanceIcon.size = 22

export default AmbulanceIcon
export const AmbulanceSvg = Ambulance
