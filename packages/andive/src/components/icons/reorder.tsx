import React from 'react'
import Reorder from '../../../img/icons/reorder.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const ReorderIcon = ({color = palette.darkPotatoYellow, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Reorder />
    </SvgIcon>
  )
}

ReorderIcon.size = DEFAULT_SIZE

export default ReorderIcon
export const ReorderSvg = Reorder
