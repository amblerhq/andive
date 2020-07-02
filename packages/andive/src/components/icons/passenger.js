import React from 'react'

import Passenger from '../../../img/icons/passenger.svg'
import Icon from '../icon'
import {palette} from '../..'

const PassengerIcon = ({color = palette.darkPrimary, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <Passenger />
    </Icon>
  )
}

PassengerIcon.size = 24

export default PassengerIcon
export const PassengerSvg = Passenger
