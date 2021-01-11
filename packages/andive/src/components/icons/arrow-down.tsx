import React from 'react'

import ArrowDown from '../../../img/icons/arrow-down.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const ArrowDownIcon = ({color = palette.mediumBerryBlue, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <ArrowDown />
    </SvgIcon>
  )
}

ArrowDownIcon.size = 24

export default ArrowDownIcon
export const ArrowDownSvg = ArrowDown
