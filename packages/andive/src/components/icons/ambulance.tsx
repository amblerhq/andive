import React from 'react'

import Ambulance from '../../../img/icons/ambulance.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 22

const AmbulanceIcon = ({color = palette.darkPrimary, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Ambulance />
    </SvgIcon>
  )
}

AmbulanceIcon.size = DEFAULT_SIZE

export default AmbulanceIcon
export const AmbulanceSvg = Ambulance
