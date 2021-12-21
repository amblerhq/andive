import React from 'react'

import ArrowDown from '../../../img/icons/arrow-down.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const ArrowDownIcon = ({color = palette.mediumBerryBlue, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <ArrowDown />
    </SvgIcon>
  )
}

ArrowDownIcon.size = DEFAULT_SIZE

export default ArrowDownIcon
export const ArrowDownSvg = ArrowDown
