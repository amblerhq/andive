import React from 'react'
import Rides from '../../../img/icons/rides.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 40

const RidesIcon = ({color = palette.white, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Rides />
    </SvgIcon>
  )
}

RidesIcon.size = DEFAULT_SIZE

export default RidesIcon
export const RidesSvg = Rides
