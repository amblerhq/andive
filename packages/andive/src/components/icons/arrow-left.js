import React from 'react'

import ArrowLeft from '../../../img/icons/arrow-left.svg'
import Icon from '../icon'
import {palette} from '../..'

const ArrowLeftIcon = ({color = palette.mediumBerryBlue, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <ArrowLeft />
    </Icon>
  )
}

ArrowLeftIcon.size = 16

export default ArrowLeftIcon
export const ArrowLeftSvg = ArrowLeft
