import React from 'react'

import ArrowLeft from '../../../img/icons/arrow-left.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const ArrowLeftIcon = ({color = palette.mediumBerryBlue, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <ArrowLeft />
    </SvgIcon>
  )
}

ArrowLeftIcon.size = DEFAULT_SIZE

export default ArrowLeftIcon
export const ArrowLeftSvg = ArrowLeft
