import React from 'react'

import FlatrateTs from '../../../img/icons/flatrate-ts.svg'
import Icon from '../icon'
import {palette} from '../..'

const FlatrateTsIcon = ({color = palette.white, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <FlatrateTs />
    </Icon>
  )
}

FlatrateTsIcon.size = 24

export default FlatrateTsIcon
export const FlatrateTsSvg = FlatrateTs
