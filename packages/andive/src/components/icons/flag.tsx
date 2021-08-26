import React from 'react'

import Flag from '../../../img/icons/flag.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const FlagIcon = ({color = palette.mediumBerryBlue, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Flag />
    </SvgIcon>
  )
}

FlagIcon.size = DEFAULT_SIZE

export default FlagIcon
export const FlagSvg = Flag
