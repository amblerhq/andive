import React from 'react'

import Bariatric from '../../../img/icons/bariatric.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const BariatricIcon = ({color = palette.darkPrimary, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <Bariatric />
    </SvgIcon>
  )
}

BariatricIcon.size = 24

export default BariatricIcon
export const BariatricSvg = Bariatric
