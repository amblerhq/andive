import React from 'react'

import Ambler from '../../../img/icons/ambler.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 27

const AmblerIcon = ({color = palette.white, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Ambler />
    </SvgIcon>
  )
}

AmblerIcon.size = DEFAULT_SIZE

export default AmblerIcon
export const AmblerSvg = Ambler
