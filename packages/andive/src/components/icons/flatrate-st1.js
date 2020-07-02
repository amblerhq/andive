import React from 'react'

import FlatrateSt1 from '../../../img/icons/flatrate-st1.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const FlatrateSt1Icon = ({color, ...props}) => {
  const isNativeColor = color === palette.white || color === 'white'

  return (
    <SvgIcon color={isNativeColor ? undefined : color} {...props}>
      <FlatrateSt1 />
    </SvgIcon>
  )
}

FlatrateSt1Icon.size = 24

export default FlatrateSt1Icon
export const FlatrateSt1Svg = FlatrateSt1
