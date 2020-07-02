import React from 'react'

import Delegate from '../../../img/icons/delegate.svg'
import SvgIcon from '../svg-icon'

const DelegateIcon = props => {
  return (
    <SvgIcon {...props}>
      <Delegate />
    </SvgIcon>
  )
}

DelegateIcon.size = 24

export default DelegateIcon
export const DelegateSvg = Delegate
