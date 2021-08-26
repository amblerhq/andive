import React from 'react'

import DropdownArrow from '../../../img/icons/dropdown-arrow.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 10

const DropdownArrowIcon = ({color = palette.mediumBerryBlue, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <DropdownArrow />
    </SvgIcon>
  )
}

DropdownArrowIcon.size = DEFAULT_SIZE

export default DropdownArrowIcon
export const DropdownArrowSvg = DropdownArrow
