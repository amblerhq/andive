import React from 'react'

import Uncheck from '../../../img/icons/uncheck.svg'
import Icon from '../icon'

const UncheckIcon = props => {
  return (
    <Icon {...props}>
      <Uncheck />
    </Icon>
  )
}

UncheckIcon.size = 24

export default UncheckIcon
export const UncheckSvg = Uncheck
