import React from 'react'

import FlatrateSt2 from '../../../img/icons/flatrate-st2.svg'
import Icon from '../icon'
import {palette} from '../..'

const FlatrateSt2Icon = ({color, ...props}) => {
  const isNativeColor = color === palette.white || color === 'white'

  return (
    <Icon color={isNativeColor ? undefined : color} {...props}>
      <FlatrateSt2 />
    </Icon>
  )
}

FlatrateSt2Icon.size = 24

export default FlatrateSt2Icon
export const FlatrateSt2Svg = FlatrateSt2
