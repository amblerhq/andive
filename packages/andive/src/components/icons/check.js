import React from 'react'

import Check from '../../../img/icons/check.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const CheckIcon = ({color = palette.mediumLettuceGreen, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <Check />
    </SvgIcon>
  )
}

CheckIcon.size = 24

export default CheckIcon
export const CheckSvg = Check
