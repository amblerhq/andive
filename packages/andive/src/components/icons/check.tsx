import React from 'react'

import Check from '../../../img/icons/check.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const CheckIcon = ({color = palette.mediumLettuceGreen, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Check />
    </SvgIcon>
  )
}

CheckIcon.size = DEFAULT_SIZE

export default CheckIcon
export const CheckSvg = Check
