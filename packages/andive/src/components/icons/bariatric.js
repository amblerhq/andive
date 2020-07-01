import React from 'react'

import Bariatric from '../../../img/icons/bariatric.svg'
import Icon from '../icon'
import {palette} from '../..'

const BariatricIcon = ({color = palette.darkPrimary, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <Bariatric />
    </Icon>
  )
}

BariatricIcon.size = 24

export default BariatricIcon
export const BariatricSvg = Bariatric
