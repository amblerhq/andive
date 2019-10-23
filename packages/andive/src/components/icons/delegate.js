import React from 'react'

import Delegate from '../../../img/icons/delegate.svg'
import Icon from '../icon'

const DelegateIcon = props => {
  return (
    <Icon {...props}>
      <Delegate />
    </Icon>
  )
}

DelegateIcon.size = 24

export default DelegateIcon
export const DelegateSvg = Delegate
