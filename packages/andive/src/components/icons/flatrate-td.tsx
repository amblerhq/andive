import React from 'react'

import FlatrateTd from '../../../img/icons/flatrate-td.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const FlatrateTdIcon = ({color = palette.white, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <FlatrateTd />
    </SvgIcon>
  )
}

FlatrateTdIcon.size = DEFAULT_SIZE

export default FlatrateTdIcon
export const FlatrateTdSvg = FlatrateTd
