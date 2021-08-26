import React from 'react'

import FlatrateSt2 from '../../../img/icons/flatrate-st2.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const FlatrateSt2Icon = ({color = palette.white, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <FlatrateSt2 />
    </SvgIcon>
  )
}

FlatrateSt2Icon.size = DEFAULT_SIZE

export default FlatrateSt2Icon
export const FlatrateSt2Svg = FlatrateSt2
