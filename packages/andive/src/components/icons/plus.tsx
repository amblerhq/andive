import React from 'react'

import Plus from '../../../img/icons/plus.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const PlusIcon = ({color = palette.darkPotatoYellow, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <Plus />
    </SvgIcon>
  )
}

PlusIcon.size = 24

export default PlusIcon
export const PlusSvg = Plus
