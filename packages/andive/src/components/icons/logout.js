import React from 'react'

import Logout from '../../../img/icons/log-out.svg'
import SvgIcon from '..//svg-icon'

const LogoutIcon = props => {
  return (
    <SvgIcon {...props}>
      <Logout />
    </SvgIcon>
  )
}

LogoutIcon.size = 22

export default LogoutIcon
export const LogoutSvg = Logout
