import React from 'react'

import ArrowUp from '../../../img/icons/arrow-up.svg'
import SvgIcon from '../svg-icon'

const ArrowUpIcon = props => {
  return (
    <SvgIcon {...props}>
      <ArrowUp />
    </SvgIcon>
  )
}

ArrowUpIcon.size = 16

export default ArrowUpIcon
export const ArrowDownSvg = ArrowUp
