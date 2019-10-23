import React from 'react'

import Rides from '../../../img/icons/rides.svg'
import Icon from '../icon'

const RidesIcon = props => {
  return (
    <Icon {...props}>
      <Rides />
    </Icon>
  )
}

RidesIcon.size = 40

export default RidesIcon
export const RidesSvg = Rides
