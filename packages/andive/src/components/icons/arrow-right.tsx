import React from 'react'

import ArrowRight from '../../../img/icons/arrow-right.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const ArrowRightIcon = ({color = palette.mediumBerryBlue, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <ArrowRight />
    </SvgIcon>
  )
}

ArrowRightIcon.size = 16

export default ArrowRightIcon
export const ArrowRightSvg = ArrowRight
