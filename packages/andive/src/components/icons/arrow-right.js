import React from 'react'

import ArrowRight from '../../../img/icons/arrow-right.svg'
import Icon from '../icon'
import {palette} from '../..'

const ArrowRightIcon = ({color = palette.mediumBerryBlue, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <ArrowRight />
    </Icon>
  )
}

ArrowRightIcon.size = 16

export default ArrowRightIcon
export const ArrowRightSvg = ArrowRight
