import React from 'react'

import Cancel from '../../../img/icons/cancel.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const CancelIcon = ({color = palette.mediumBerryBlue, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Cancel />
    </SvgIcon>
  )
}

CancelIcon.size = DEFAULT_SIZE

export default CancelIcon
export const CancelSvg = Cancel
