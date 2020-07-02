import React from 'react'

import Flag from '../../../img/icons/flag.svg'
import Icon from '../icon'
import {palette} from '../..'

const FlagIcon = ({color = palette.mediumBerryBlue, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <Flag />
    </Icon>
  )
}

FlagIcon.size = 24

export default FlagIcon
export const FlagSvg = Flag
