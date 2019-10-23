import React from 'react'

import ArrowRight from '../../../img/icons/arrow-right.svg'
import Icon from '../icon'

const ArrowRightIcon = props => {
  return (
    <Icon {...props}>
      <ArrowRight />
    </Icon>
  )
}

ArrowRightIcon.size = 16

export default ArrowRightIcon
export const ArrowRightSvg = ArrowRight
