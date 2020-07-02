import React from 'react'

import FlatrateTs from '../../../img/icons/flatrate-ts.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const FlatrateTsIcon = ({color, ...props}) => {
  const isNativeColor = color === palette.white || color === 'white'
  return (
    <SvgIcon color={isNativeColor ? undefined : color} {...props}>
      <FlatrateTs />
    </SvgIcon>
  )
}

FlatrateTsIcon.size = 24

export default FlatrateTsIcon
export const FlatrateTsSvg = FlatrateTs
