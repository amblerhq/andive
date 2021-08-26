import React from 'react'

import Logout from '../../../img/icons/log-out.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 20

const LogoutIcon = ({color = palette.mediumPrimary, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Logout />
    </SvgIcon>
  )
}

LogoutIcon.size = DEFAULT_SIZE

export default LogoutIcon
export const LogoutSvg = Logout
