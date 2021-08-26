import React from 'react'

import Art80 from '../../../img/icons/art80.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const Art80Icon = ({color = palette.white, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Art80 />
    </SvgIcon>
  )
}

Art80Icon.size = DEFAULT_SIZE

export default Art80Icon
export const Art80Svg = Art80
