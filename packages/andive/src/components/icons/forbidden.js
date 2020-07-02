import React from 'react'

import Forbidden from '../../../img/icons/forbidden.svg'
import SvgIcon from '..//svg-icon'

const ForbiddenIcon = props => {
  return (
    <SvgIcon {...props}>
      <Forbidden />
    </SvgIcon>
  )
}

ForbiddenIcon.size = 24

export default ForbiddenIcon
export const ForbiddenSvg = Forbidden
