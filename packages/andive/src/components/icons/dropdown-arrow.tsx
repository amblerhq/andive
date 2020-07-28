import React from 'react'

import DropdownArrow from '../../../img/icons/dropdown-arrow.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DropdownArrowIcon = ({color = palette.mediumBerryBlue, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <DropdownArrow />
    </SvgIcon>
  )
}

DropdownArrowIcon.size = 16

export default DropdownArrowIcon
export const DropdownArrowSvg = DropdownArrow
