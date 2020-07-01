import React from 'react'

import FlatrateSt2 from '../../../img/icons/flatrate-st2.svg'
import Icon from '../icon'
import {palette} from '../..'

const FlatrateSt2Icon = ({color = palette.white, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <FlatrateSt2 />
    </Icon>
  )
}

FlatrateSt2Icon.size = 24

export default FlatrateSt2Icon
export const FlatrateSt2Svg = FlatrateSt2
