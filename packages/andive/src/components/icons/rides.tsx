import React from 'react'

import Rides from '../../../img/icons/rides.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const RidesIcon = ({color = palette.white, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <Rides />
    </SvgIcon>
  )
}

RidesIcon.size = 40

export default RidesIcon
export const RidesSvg = Rides
