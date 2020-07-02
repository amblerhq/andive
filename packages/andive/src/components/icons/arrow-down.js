import React from 'react'

import ArrowDown from '../../../img/icons/arrow-down.svg'
import SvgIcon from '../svg-icon'

const ArrowDownIcon = props => {
  return (
    <SvgIcon {...props}>
      <ArrowDown />
    </SvgIcon>
  )
}

ArrowDownIcon.size = 16

export default ArrowDownIcon
export const ArrowDownSvg = ArrowDown
