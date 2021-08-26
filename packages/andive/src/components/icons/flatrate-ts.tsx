import React from 'react'

import FlatrateTs from '../../../img/icons/flatrate-ts.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const FlatrateTsIcon = ({color = palette.white, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <FlatrateTs />
    </SvgIcon>
  )
}

FlatrateTsIcon.size = DEFAULT_SIZE

export default FlatrateTsIcon
export const FlatrateTsSvg = FlatrateTs
