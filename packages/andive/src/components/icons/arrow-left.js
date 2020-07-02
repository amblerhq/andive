import React from 'react'

import ArrowLeft from '../../../img/icons/arrow-left.svg'
import SvgIcon from '../svg-icon'

const ArrowLeftIcon = props => {
  return (
    <SvgIcon {...props}>
      <ArrowLeft />
    </SvgIcon>
  )
}

ArrowLeftIcon.size = 16

export default ArrowLeftIcon
export const ArrowLeftSvg = ArrowLeft
