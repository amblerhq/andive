import React from 'react'

import Close from '../../../img/icons/close.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const CloseIcon = ({color = palette.mediumPrimary, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <Close />
    </SvgIcon>
  )
}

CloseIcon.size = 16

export default CloseIcon
export const CloseSvg = Close
