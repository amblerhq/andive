import React from 'react'

import Gyro from '../../../img/icons/gyro.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const GyroIcon = ({color = palette.darkPrimary, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Gyro />
    </SvgIcon>
  )
}

GyroIcon.size = DEFAULT_SIZE

export default GyroIcon
export const GyroSvg = Gyro
