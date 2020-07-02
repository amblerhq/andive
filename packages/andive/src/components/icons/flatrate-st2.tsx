import React from 'react'

import FlatrateSt2 from '../../../img/icons/flatrate-st2.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const FlatrateSt2Icon = ({color = palette.white, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <FlatrateSt2 />
    </SvgIcon>
  )
}

FlatrateSt2Icon.size = 24

export default FlatrateSt2Icon
export const FlatrateSt2Svg = FlatrateSt2
