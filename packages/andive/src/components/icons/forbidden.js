import React from 'react'

import Forbidden from '../../../img/icons/forbidden.svg'
import Icon from '../icon'
import {palette} from '../..'

const ForbiddenIcon = ({color = palette.darkRadishRed, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <Forbidden />
    </Icon>
  )
}

ForbiddenIcon.size = 24

export default ForbiddenIcon
export const ForbiddenSvg = Forbidden
