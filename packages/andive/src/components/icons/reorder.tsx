import React from 'react'

import Reorder from '../../../img/icons/reorder.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const ReorderIcon = ({color = palette.darkPotatoYellow, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <Reorder />
    </SvgIcon>
  )
}

ReorderIcon.size = 24

export default ReorderIcon
export const ReorderSvg = Reorder
