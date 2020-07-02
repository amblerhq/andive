import React from 'react'

import Logout from '../../../img/icons/log-out.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const LogoutIcon = ({color = palette.mediumPrimary, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <Logout />
    </SvgIcon>
  )
}

LogoutIcon.size = 22

export default LogoutIcon
export const LogoutSvg = Logout
