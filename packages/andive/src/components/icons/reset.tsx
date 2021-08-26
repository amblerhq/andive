import React from 'react'
import Reset from '../../../img/icons/reset.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const ResetIcon = ({color = palette.mediumBerryBlue, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Reset />
    </SvgIcon>
  )
}

ResetIcon.size = DEFAULT_SIZE

export default ResetIcon
export const ResetSvg = Reset
