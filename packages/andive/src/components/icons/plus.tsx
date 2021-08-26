import React from 'react'
import Plus from '../../../img/icons/plus.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const PlusIcon = ({color = palette.darkPotatoYellow, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Plus />
    </SvgIcon>
  )
}

PlusIcon.size = DEFAULT_SIZE

export default PlusIcon
export const PlusSvg = Plus
