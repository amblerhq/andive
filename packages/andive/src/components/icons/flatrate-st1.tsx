import React from 'react'

import FlatrateSt1 from '../../../img/icons/flatrate-st1.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const FlatrateSt1Icon = ({color = palette.white, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <FlatrateSt1 />
    </SvgIcon>
  )
}

FlatrateSt1Icon.size = 24

export default FlatrateSt1Icon
export const FlatrateSt1Svg = FlatrateSt1
