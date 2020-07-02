import React from 'react'

import ConnectAs from '../../../img/icons/connect-as.svg'
import SvgIcon from '../svg-icon'

const ConnectAsIcon = props => {
  return (
    <SvgIcon {...props}>
      <ConnectAs />
    </SvgIcon>
  )
}

ConnectAsIcon.size = 24

export default ConnectAsIcon
export const ConnectAsSvg = ConnectAs
