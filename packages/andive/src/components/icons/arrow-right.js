import React from 'react'

import ArrowRight from '../../../img/icons/arrow-right.svg'
import SvgIcon from '../svg-icon'

const ArrowRightIcon = props => {
  return (
    <SvgIcon {...props}>
      <ArrowRight />
    </SvgIcon>
  )
}

ArrowRightIcon.size = 16

export default ArrowRightIcon
export const ArrowRightSvg = ArrowRight
