import React from 'react'

import ConnectAs from '../../../img/icons/connect-as.svg'
import Icon from '../icon'

const ConnectAsIcon = props => {
  return (
    <Icon {...props}>
      <ConnectAs />
    </Icon>
  )
}

ConnectAsIcon.size = 24

export default ConnectAsIcon
export const ConnectAsSvg = ConnectAs
