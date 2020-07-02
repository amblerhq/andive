import React from 'react'

import Forbidden from '../../../img/icons/forbidden.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const ForbiddenIcon = ({color = palette.darkRadishRed, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <Forbidden />
    </SvgIcon>
  )
}

ForbiddenIcon.size = 24

export default ForbiddenIcon
export const ForbiddenSvg = Forbidden
