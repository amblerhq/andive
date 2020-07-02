import React from 'react'

import Cancel from '../../../img/icons/cancel.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const CancelIcon = ({color = palette.mediumBerryBlue, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <Cancel />
    </SvgIcon>
  )
}

CancelIcon.size = 24

export default CancelIcon
export const CancelSvg = Cancel
