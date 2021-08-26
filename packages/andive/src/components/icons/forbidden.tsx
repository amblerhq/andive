import React from 'react'

import Forbidden from '../../../img/icons/forbidden.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const ForbiddenIcon = ({color = palette.darkRadishRed, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Forbidden />
    </SvgIcon>
  )
}

ForbiddenIcon.size = DEFAULT_SIZE

export default ForbiddenIcon
export const ForbiddenSvg = Forbidden
