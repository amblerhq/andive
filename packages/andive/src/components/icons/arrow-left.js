import React from 'react'

import ArrowLeft from '../../../img/icons/arrow-left.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const ArrowLeftIcon = ({color = palette.mediumBerryBlue, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <ArrowLeft />
    </SvgIcon>
  )
}

ArrowLeftIcon.size = 16

export default ArrowLeftIcon
export const ArrowLeftSvg = ArrowLeft
