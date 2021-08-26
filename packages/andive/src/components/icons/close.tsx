import React from 'react'

import Close from '../../../img/icons/close.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 22

const CloseIcon = ({color = palette.mediumPrimary, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Close />
    </SvgIcon>
  )
}

CloseIcon.size = DEFAULT_SIZE

export default CloseIcon
export const CloseSvg = Close
