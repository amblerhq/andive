import React from 'react'

import Close from '../../../img/icons/close.svg'
import SvgIcon from '../svg-icon'

const CloseIcon = props => {
  return (
    <SvgIcon {...props}>
      <Close />
    </SvgIcon>
  )
}

CloseIcon.size = 16

export default CloseIcon
export const CloseSvg = Close
