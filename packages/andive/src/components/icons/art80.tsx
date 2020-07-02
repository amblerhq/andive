import React from 'react'

import Art80 from '../../../img/icons/art80.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const Art80Icon = ({color = palette.white, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <Art80 />
    </SvgIcon>
  )
}

Art80Icon.size = 24

export default Art80Icon
export const Art80Svg = Art80
