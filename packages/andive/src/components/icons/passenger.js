import React from 'react'

import Passenger from '../../../img/icons/passenger.svg'
import Icon from '../icon'

const PassengerIcon = props => {
  return (
    <Icon {...props}>
      <Passenger />
    </Icon>
  )
}

PassengerIcon.size = 24

export default PassengerIcon
export const PassengerSvg = Passenger
