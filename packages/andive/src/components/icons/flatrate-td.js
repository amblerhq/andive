import React from 'react'

import FlatrateTd from '../../../img/icons/flatrate-td.svg'
import Icon from '../icon'
import {palette} from '../..'

const FlatrateTdIcon = ({color = palette.white, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <FlatrateTd />
    </Icon>
  )
}

FlatrateTdIcon.size = 24

export default FlatrateTdIcon
export const FlatrateTdSvg = FlatrateTd
