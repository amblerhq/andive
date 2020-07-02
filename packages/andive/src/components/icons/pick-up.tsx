import React from 'react'

import PickUp from '../../../img/icons/pick-up.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const PickUpIcon = ({color = palette.darkPrimary, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <PickUp />
    </SvgIcon>
  )
}

PickUpIcon.size = 24

export default PickUpIcon
export const PickUpSvg = PickUp
