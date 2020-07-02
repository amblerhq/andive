import React from 'react'

import RadioOff from '../../../img/icons/off-round.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const RadioOffIcon = ({color = palette.mediumBerryBlue, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <RadioOff />
    </SvgIcon>
  )
}

RadioOffIcon.size = 24

export default RadioOffIcon
export const RadioOffSvg = RadioOff
