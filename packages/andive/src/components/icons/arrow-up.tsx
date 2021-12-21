import React from 'react'

import ArrowUp from '../../../img/icons/arrow-up.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const ArrowUpIcon = ({color = palette.mediumPrimary, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <ArrowUp />
    </SvgIcon>
  )
}

ArrowUpIcon.size = DEFAULT_SIZE

export default ArrowUpIcon
export const ArrowDownSvg = ArrowUp
