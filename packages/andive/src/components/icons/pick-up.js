import React from 'react'

import PickUp from '../../../img/icons/pick-up.svg'
import Icon from '../icon'
import {palette} from '../..'

const PickUpIcon = ({color = palette.darkPrimary, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <PickUp />
    </Icon>
  )
}

PickUpIcon.size = 24

export default PickUpIcon
export const PickUpSvg = PickUp
