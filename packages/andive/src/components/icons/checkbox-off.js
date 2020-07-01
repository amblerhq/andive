import React from 'react'

import CheckboxOff from '../../../img/icons/off-squared.svg'
import Icon from '../icon'
import {palette} from '../..'

const CheckboxOffIcon = ({color = palette.mediumBerryBlue, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <CheckboxOff />
    </Icon>
  )
}

CheckboxOffIcon.size = 24

export default CheckboxOffIcon
export const CheckboxOffSvg = CheckboxOff
