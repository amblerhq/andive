import React from 'react'
import Warning from '../../../img/icons/warning.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const WarningIcon = ({color = palette.darkPotatoYellow, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Warning />
    </SvgIcon>
  )
}

WarningIcon.size = DEFAULT_SIZE

export default WarningIcon
export const WarningSvg = Warning
