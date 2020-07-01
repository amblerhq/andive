import React from 'react'

import Close from '../../../img/icons/close.svg'
import Icon from '../icon'
import {palette} from '../..'

const CloseIcon = ({color = palette.mediumPrimary, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <Close />
    </Icon>
  )
}

CloseIcon.size = 16

export default CloseIcon
export const CloseSvg = Close
