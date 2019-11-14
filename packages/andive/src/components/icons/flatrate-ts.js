import React from 'react'

import FlatrateTs from '../../../img/icons/flatrate-ts.svg'
import Icon from '../icon'
import {palette} from '../..'

const FlatrateTsIcon = ({color, ...props}) => {
  const isNativeColor = color === palette.white || color === 'white'
  return (
    <Icon color={isNativeColor ? undefined : color} {...props}>
      <FlatrateTs />
    </Icon>
  )
}

FlatrateTsIcon.size = 24

export default FlatrateTsIcon
export const FlatrateTsSvg = FlatrateTs
