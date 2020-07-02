import React from 'react'

import FlatrateTs from '../../../img/icons/flatrate-ts.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const FlatrateTsIcon = ({color = palette.white, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <FlatrateTs />
    </SvgIcon>
  )
}

FlatrateTsIcon.size = 24

export default FlatrateTsIcon
export const FlatrateTsSvg = FlatrateTs
