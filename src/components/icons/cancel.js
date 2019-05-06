import React from 'react'

import Cancel from '../../../img/icons/cancel.svg'
import Icon from '../icon'

const CancelIcon = props => {
  return (
    <Icon {...props}>
      <Cancel />
    </Icon>
  )
}

CancelIcon.size = 24

export default CancelIcon
export const CancelSvg = Cancel