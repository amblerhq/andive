import React from 'react'
import Unlock from '../../../img/icons/unlock.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const UnlockIcon = ({color = palette.mediumBerryBlue, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Unlock />
    </SvgIcon>
  )
}

UnlockIcon.size = DEFAULT_SIZE

export default UnlockIcon
export const UnlockSvg = Unlock
