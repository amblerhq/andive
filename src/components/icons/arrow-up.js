import React from 'react'

import ArrowUp from '../../../img/icons/arrow-up.svg'
import Icon from '../icon'

const ArrowUpIcon = props => {
  return (
    <Icon {...props}>
      <ArrowUp />
    </Icon>
  )
}

ArrowUpIcon.size = 16

export default ArrowUpIcon
export const ArrowDownSvg = ArrowUp
