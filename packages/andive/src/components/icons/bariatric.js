import React from 'react'

import Bariatric from '../../../img/icons/bariatric.svg'
import SvgIcon from '../svg-icon'

const BariatricIcon = props => {
  return (
    <SvgIcon {...props}>
      <Bariatric />
    </SvgIcon>
  )
}

BariatricIcon.size = 24

export default BariatricIcon
export const BariatricSvg = Bariatric
