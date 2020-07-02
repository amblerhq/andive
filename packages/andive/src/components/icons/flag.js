import React from 'react'

import Flag from '../../../img/icons/flag.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const FlagIcon = ({color = palette.mediumBerryBlue, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <Flag />
    </SvgIcon>
  )
}

FlagIcon.size = 24

export default FlagIcon
export const FlagSvg = Flag
