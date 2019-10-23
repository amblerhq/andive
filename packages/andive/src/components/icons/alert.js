import React from 'react'

import Alert from '../../../img/icons/alert.svg'
import Icon from '../icon'

const AlertIcon = props => {
  return (
    <Icon {...props}>
      <Alert />
    </Icon>
  )
}

AlertIcon.size = 22

export default AlertIcon
export const AlertSvg = Alert
