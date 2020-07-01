import React from 'react'

import ArrowUp from '../../../img/icons/arrow-up.svg'
import Icon from '../icon'
import {palette} from '../..'

const ArrowUpIcon = ({color = palette.mediumPrimary, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <ArrowUp />
    </Icon>
  )
}

ArrowUpIcon.size = 16

export default ArrowUpIcon
export const ArrowDownSvg = ArrowUp
