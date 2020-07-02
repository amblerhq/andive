import React from 'react'

import RadioOff from '../../../img/icons/off-round.svg'
import SvgIcon from '../svg-icon'

const RadioOffIcon = props => {
  return (
    <SvgIcon {...props}>
      <RadioOff />
    </SvgIcon>
  )
}

RadioOffIcon.size = 24

export default RadioOffIcon
export const RadioOffSvg = RadioOff
