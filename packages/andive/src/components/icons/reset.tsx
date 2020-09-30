import React from 'react'

import Reset from '../../../img/icons/reset.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const ResetIcon = ({color = palette.mediumBerryBlue, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <Reset />
    </SvgIcon>
  )
}

ResetIcon.size = 24

export default ResetIcon
export const ResetSvg = Reset
