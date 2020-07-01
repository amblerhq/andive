import React from 'react'

import Warning from '../../../img/icons/warning.svg'
import Icon from '../icon'

const WarningIcon = props => {
  return (
    <Icon {...props}>
      <Warning />
    </Icon>
  )
}

WarningIcon.size = 24

export default WarningIcon
export const WarningSvg = Warning
