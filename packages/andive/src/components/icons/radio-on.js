import React from 'react'

import RadioOn from '../../../img/icons/on-round.svg'
import Icon from '../icon'
import {palette} from '../..'

const RadioOnIcon = ({color = palette.mediumBerryBlue, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <RadioOn />
    </Icon>
  )
}

RadioOnIcon.size = 24

export default RadioOnIcon
export const RadioOnSvg = RadioOn
