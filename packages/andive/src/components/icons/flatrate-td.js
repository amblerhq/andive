import React from 'react'

import FlatrateTd from '../../../img/icons/flatrate-td.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const FlatrateTdIcon = ({color = palette.white, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <FlatrateTd />
    </SvgIcon>
  )
}

FlatrateTdIcon.size = 24

export default FlatrateTdIcon
export const FlatrateTdSvg = FlatrateTd
