import React from 'react'

import Passenger from '../../../img/icons/passenger.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const PassengerIcon = ({color = palette.darkPrimary, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <Passenger />
    </SvgIcon>
  )
}

PassengerIcon.size = 24

export default PassengerIcon
export const PassengerSvg = Passenger
