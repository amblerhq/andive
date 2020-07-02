import React from 'react'

import FlatrateTd from '../../../img/icons/flatrate-td.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const FlatrateTdIcon = ({color, ...props}) => {
  const isNativeColor = color === palette.white || color === 'white'
  return (
    <SvgIcon color={isNativeColor ? undefined : color} {...props}>
      <FlatrateTd />
    </SvgIcon>
  )
}

FlatrateTdIcon.size = 24

export default FlatrateTdIcon
export const FlatrateTdSvg = FlatrateTd
