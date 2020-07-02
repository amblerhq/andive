import React from 'react'

import Rides from '../../../img/icons/rides.svg'
import Icon from '../icon'
import {palette} from '../..'

const RidesIcon = ({color = palette.white, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <Rides />
    </Icon>
  )
}

RidesIcon.size = 40

export default RidesIcon
export const RidesSvg = Rides
