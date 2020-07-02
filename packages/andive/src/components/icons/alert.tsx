import React from 'react'

import Alert from '../../../img/icons/alert.svg'
import SvgIcon from '../svg-icon'

const AlertIcon = props => {
  return (
    <SvgIcon {...props}>
      <Alert />
    </SvgIcon>
  )
}

AlertIcon.size = 22

export default AlertIcon
export const AlertSvg = Alert
