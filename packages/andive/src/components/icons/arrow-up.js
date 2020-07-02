import React from 'react'

import ArrowUp from '../../../img/icons/arrow-up.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const ArrowUpIcon = ({color = palette.mediumPrimary, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <ArrowUp />
    </SvgIcon>
  )
}

ArrowUpIcon.size = 16

export default ArrowUpIcon
export const ArrowDownSvg = ArrowUp
