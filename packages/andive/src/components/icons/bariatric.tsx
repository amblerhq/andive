import React from 'react'

import Bariatric from '../../../img/icons/bariatric.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 22

const BariatricIcon = ({color = palette.darkPrimary, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Bariatric />
    </SvgIcon>
  )
}

BariatricIcon.size = DEFAULT_SIZE

export default BariatricIcon
export const BariatricSvg = Bariatric
