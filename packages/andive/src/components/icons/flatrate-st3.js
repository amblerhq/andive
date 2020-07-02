import React from 'react'

import FlatrateSt3 from '../../../img/icons/flatrate-st3.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const FlatrateSt3Icon = ({color, ...props}) => {
  const isNativeColor = color === palette.white || color === 'white'

  return (
    <SvgIcon color={isNativeColor ? undefined : color} {...props}>
      <FlatrateSt3 />
    </SvgIcon>
  )
}

FlatrateSt3Icon.size = 24

export default FlatrateSt3Icon
export const FlatrateSt3Svg = FlatrateSt3
