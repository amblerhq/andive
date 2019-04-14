import React from 'react'

import Close from '../../../img/icons/close.svg'
import Icon from '../icon'

const CloseIcon = props => {
  return (
    <Icon {...props}>
      <Close />
    </Icon>
  )
}

CloseIcon.size = 16

export default CloseIcon
export const CloseSvg = Close
