import React from 'react'
import CheckboxOff from '../../../img/icons/off-squared.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const CheckboxOffIcon = ({color = palette.mediumBerryBlue, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <CheckboxOff />
    </SvgIcon>
  )
}

CheckboxOffIcon.size = DEFAULT_SIZE

export default CheckboxOffIcon
export const CheckboxOffSvg = CheckboxOff
