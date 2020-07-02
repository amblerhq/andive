import React from 'react'

import Cancel from '../../../img/icons/cancel.svg'
import Icon from '../icon'
import {palette} from '../..'

const CancelIcon = ({color = palette.mediumBerryBlue, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <Cancel />
    </Icon>
  )
}

CancelIcon.size = 24

export default CancelIcon
export const CancelSvg = Cancel
