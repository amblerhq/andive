import React from 'react'

import Art80 from '../../../img/icons/art80.svg'
import Icon from '../icon'
import {palette} from '../..'

const Art80Icon = ({color = palette.white, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <Art80 />
    </Icon>
  )
}

Art80Icon.size = 24

export default Art80Icon
export const Art80Svg = Art80
