import React from 'react'

import ArrowRight from '../../../img/icons/arrow-right.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const ArrowRightIcon = ({color = palette.mediumBerryBlue, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <ArrowRight />
    </SvgIcon>
  )
}

ArrowRightIcon.size = DEFAULT_SIZE

export default ArrowRightIcon
export const ArrowRightSvg = ArrowRight
