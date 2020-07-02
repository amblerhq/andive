import React from 'react'

import RadioOn from '../../../img/icons/on-round.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const RadioOnIcon = ({color = palette.mediumBerryBlue, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <RadioOn />
    </SvgIcon>
  )
}

RadioOnIcon.size = 24

export default RadioOnIcon
export const RadioOnSvg = RadioOn
