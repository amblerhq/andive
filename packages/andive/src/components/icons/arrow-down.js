import React from 'react'

import ArrowDown from '../../../img/icons/arrow-down.svg'
import Icon from '../icon'

const ArrowDownIcon = props => {
  return (
    <Icon {...props}>
      <ArrowDown />
    </Icon>
  )
}

ArrowDownIcon.size = 16

export default ArrowDownIcon
export const ArrowDownSvg = ArrowDown
