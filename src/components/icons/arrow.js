import React from 'react'

import Arrow from '../../../img/icons/arrow-right.svg'
import Icon from '../icon'

const ArrowIcon = props => {
  return (
    <Icon {...props}>
      <Arrow />
    </Icon>
  )
}

ArrowIcon.size = 16

export default ArrowIcon
export const ArrowSvg = Arrow
