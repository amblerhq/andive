import React from 'react'

import Cancel from '../../../img/icons/cancel.svg'
import SvgIcon from '..//svg-icon'

const CancelIcon = props => {
  return (
    <SvgIcon {...props}>
      <Cancel />
    </SvgIcon>
  )
}

CancelIcon.size = 24

export default CancelIcon
export const CancelSvg = Cancel
