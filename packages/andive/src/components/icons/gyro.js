import React from 'react'

import Gyro from '../../../img/icons/gyro.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const GyroIcon = ({color = palette.darkPrimary, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <Gyro />
    </SvgIcon>
  )
}

GyroIcon.size = 24

export default GyroIcon
export const GyroSvg = Gyro
