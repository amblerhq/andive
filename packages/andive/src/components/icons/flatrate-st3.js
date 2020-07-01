import React from 'react'

import FlatrateSt3 from '../../../img/icons/flatrate-st3.svg'
import Icon from '../icon'
import {palette} from '../..'

const FlatrateSt3Icon = ({color = palette.white, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <FlatrateSt3 />
    </Icon>
  )
}

FlatrateSt3Icon.size = 24

export default FlatrateSt3Icon
export const FlatrateSt3Svg = FlatrateSt3
