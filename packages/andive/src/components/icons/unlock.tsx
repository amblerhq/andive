import React from 'react'

import Unlock from '../../../img/icons/unlock.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const UnlockIcon = ({color = palette.mediumBerryBlue, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <Unlock />
    </SvgIcon>
  )
}

UnlockIcon.size = 24

export default UnlockIcon
export const UnlockSvg = Unlock
