import React from 'react'

import Alert from '../../../img/icons/alert.svg'
import SvgIcon from '../svg-icon'

const DEFAULT_SIZE = 22

const AlertIcon = ({size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon size={size} {...rest}>
      <Alert />
    </SvgIcon>
  )
}

AlertIcon.size = DEFAULT_SIZE

export default AlertIcon
export const AlertSvg = Alert
