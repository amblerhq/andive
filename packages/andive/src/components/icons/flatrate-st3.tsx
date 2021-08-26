import React from 'react'

import FlatrateSt3 from '../../../img/icons/flatrate-st3.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const FlatrateSt3Icon = ({color = palette.white, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <FlatrateSt3 />
    </SvgIcon>
  )
}

FlatrateSt3Icon.size = DEFAULT_SIZE

export default FlatrateSt3Icon
export const FlatrateSt3Svg = FlatrateSt3
