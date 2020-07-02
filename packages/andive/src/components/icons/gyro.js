import React from 'react'

import Gyro from '../../../img/icons/gyro.svg'
import Icon from '../icon'
import {palette} from '../..'

const GyroIcon = ({color = palette.darkPrimary, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <Gyro />
    </Icon>
  )
}

GyroIcon.size = 24

export default GyroIcon
export const GyroSvg = Gyro
