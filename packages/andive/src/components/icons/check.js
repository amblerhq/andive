import React from 'react'

import Check from '../../../img/icons/check.svg'
import Icon from '../icon'
import {palette} from '../..'

const CheckIcon = ({color = palette.mediumLettuceGreen, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <Check />
    </Icon>
  )
}

CheckIcon.size = 24

export default CheckIcon
export const CheckSvg = Check
