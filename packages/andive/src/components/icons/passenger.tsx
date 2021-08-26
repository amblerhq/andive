import React from 'react'
import Passenger from '../../../img/icons/passenger.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const PassengerIcon = ({color = palette.darkPrimary, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Passenger />
    </SvgIcon>
  )
}

PassengerIcon.size = DEFAULT_SIZE

export default PassengerIcon
export const PassengerSvg = Passenger
