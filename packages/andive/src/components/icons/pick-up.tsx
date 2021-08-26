import React from 'react'
import PickUp from '../../../img/icons/pick-up.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const PickUpIcon = ({color = palette.darkPrimary, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <PickUp />
    </SvgIcon>
  )
}

PickUpIcon.size = DEFAULT_SIZE

export default PickUpIcon
export const PickUpSvg = PickUp
