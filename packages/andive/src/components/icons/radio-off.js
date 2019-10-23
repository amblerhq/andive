import React from 'react'

import RadioOff from '../../../img/icons/off-round.svg'
import Icon from '../icon'

const RadioOffIcon = props => {
  return (
    <Icon {...props}>
      <RadioOff />
    </Icon>
  )
}

RadioOffIcon.size = 24

export default RadioOffIcon
export const RadioOffSvg = RadioOff
