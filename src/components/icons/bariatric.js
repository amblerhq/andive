import React from 'react'

import Bariatric from '../../../img/icons/bariatric.svg'
import Icon from '../icon'

const BariatricIcon = props => {
  return (
    <Icon {...props}>
      <Bariatric />
    </Icon>
  )
}

BariatricIcon.size = 24

export default BariatricIcon
export const BariatricSvg = Bariatric
