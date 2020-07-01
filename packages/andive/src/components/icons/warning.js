import React from 'react'

import Warning from '../../../img/icons/warning.svg'
import Icon from '../icon'
import {palette} from '../..'

const WarningIcon = ({color = palette.darkPotatoYellow, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <Warning />
    </Icon>
  )
}

WarningIcon.size = 24

export default WarningIcon
export const WarningSvg = Warning
