import React from 'react'

import RadioOn from '../../../img/icons/on-round.svg'
import Icon from '../icon'

const RadioOnIcon = props => {
  return (
    <Icon {...props}>
      <RadioOn />
    </Icon>
  )
}

RadioOnIcon.size = 24

export default RadioOnIcon
export const RadioOnSvg = RadioOn
