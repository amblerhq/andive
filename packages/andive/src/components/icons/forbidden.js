import React from 'react'

import Forbidden from '../../../img/icons/forbidden.svg'
import Icon from '../icon'

const ForbiddenIcon = props => {
  return (
    <Icon {...props}>
      <Forbidden />
    </Icon>
  )
}

ForbiddenIcon.size = 24

export default ForbiddenIcon
export const ForbiddenSvg = Forbidden
