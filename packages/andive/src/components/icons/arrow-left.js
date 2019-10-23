import React from 'react'

import ArrowLeft from '../../../img/icons/arrow-left.svg'
import Icon from '../icon'

const ArrowLeftIcon = props => {
  return (
    <Icon {...props}>
      <ArrowLeft />
    </Icon>
  )
}

ArrowLeftIcon.size = 16

export default ArrowLeftIcon
export const ArrowLeftSvg = ArrowLeft
