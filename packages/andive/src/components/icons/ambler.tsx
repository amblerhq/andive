import React from 'react'

import Ambler from '../../../img/icons/ambler.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const AmblerIcon = ({color = palette.white, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <Ambler />
    </SvgIcon>
  )
}

AmblerIcon.size = 40

export default AmblerIcon
export const AmblerSvg = Ambler
