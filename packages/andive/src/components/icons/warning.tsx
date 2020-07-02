import React from 'react'

import Warning from '../../../img/icons/warning.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const WarningIcon = ({color = palette.darkPotatoYellow, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <Warning />
    </SvgIcon>
  )
}

WarningIcon.size = 24

export default WarningIcon
export const WarningSvg = Warning
