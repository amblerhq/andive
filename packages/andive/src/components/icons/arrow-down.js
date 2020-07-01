import React from 'react'

import ArrowDown from '../../../img/icons/arrow-down.svg'
import Icon from '../icon'
import {palette} from '../..'

const ArrowDownIcon = ({color = palette.mediumBerryBlue, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <ArrowDown />
    </Icon>
  )
}

ArrowDownIcon.size = 16

export default ArrowDownIcon
export const ArrowDownSvg = ArrowDown
