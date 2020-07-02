import React from 'react'

import Logout from '../../../img/icons/log-out.svg'
import Icon from '../icon'
import {palette} from '../..'

const LogoutIcon = ({color = palette.mediumPrimary, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <Logout />
    </Icon>
  )
}

LogoutIcon.size = 22

export default LogoutIcon
export const LogoutSvg = Logout
