import React from 'react'

import Rides from '../../../img/icons/rides.svg'
import SvgIcon from '..//svg-icon'

const RidesIcon = props => {
  return (
    <SvgIcon {...props}>
      <Rides />
    </SvgIcon>
  )
}

RidesIcon.size = 40

export default RidesIcon
export const RidesSvg = Rides
