import React from 'react'

import RadioOff from '../../../img/icons/off-round.svg'
import Icon from '../icon'
import {palette} from '../..'

const RadioOffIcon = ({color = palette.mediumBerryBlue, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <RadioOff />
    </Icon>
  )
}

RadioOffIcon.size = 24

export default RadioOffIcon
export const RadioOffSvg = RadioOff
