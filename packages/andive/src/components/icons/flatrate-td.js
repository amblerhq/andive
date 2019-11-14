import React from 'react'

import FlatrateTd from '../../../img/icons/flatrate-td.svg'
import Icon from '../icon'
import {palette} from '../..'

const FlatrateTdIcon = ({color, ...props}) => {
  const isNativeColor = color === palette.white || color === 'white'
  return (
    <Icon color={isNativeColor ? undefined : color} {...props}>
      <FlatrateTd />
    </Icon>
  )
}

FlatrateTdIcon.size = 24

export default FlatrateTdIcon
export const FlatrateTdSvg = FlatrateTd
