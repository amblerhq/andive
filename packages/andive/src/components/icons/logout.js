import React from 'react'

import Logout from '../../../img/icons/log-out.svg'
import Icon from '../icon'

const LogoutIcon = props => {
  return (
    <Icon {...props}>
      <Logout />
    </Icon>
  )
}

LogoutIcon.size = 22

export default LogoutIcon
export const LogoutSvg = Logout
