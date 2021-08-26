import React from 'react'
import RadioOff from '../../../img/icons/off-round.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const RadioOffIcon = ({color = palette.mediumBerryBlue, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <RadioOff />
    </SvgIcon>
  )
}

RadioOffIcon.size = DEFAULT_SIZE

export default RadioOffIcon
export const RadioOffSvg = RadioOff
