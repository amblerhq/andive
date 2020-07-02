import React from 'react'

import CheckboxOff from '../../../img/icons/off-squared.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const CheckboxOffIcon = ({color = palette.mediumBerryBlue, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <CheckboxOff />
    </SvgIcon>
  )
}

CheckboxOffIcon.size = 24

export default CheckboxOffIcon
export const CheckboxOffSvg = CheckboxOff
