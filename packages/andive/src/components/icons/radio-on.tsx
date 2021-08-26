import React from 'react'
import RadioOn from '../../../img/icons/on-round.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const RadioOnIcon = ({color = palette.mediumBerryBlue, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <RadioOn />
    </SvgIcon>
  )
}

RadioOnIcon.size = DEFAULT_SIZE

export default RadioOnIcon
export const RadioOnSvg = RadioOn
