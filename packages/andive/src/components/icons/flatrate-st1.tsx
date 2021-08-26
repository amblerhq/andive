import React from 'react'

import FlatrateSt1 from '../../../img/icons/flatrate-st1.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const FlatrateSt1Icon = ({color = palette.white, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <FlatrateSt1 />
    </SvgIcon>
  )
}

FlatrateSt1Icon.size = DEFAULT_SIZE

export default FlatrateSt1Icon
export const FlatrateSt1Svg = FlatrateSt1
