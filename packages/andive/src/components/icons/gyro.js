import React from 'react'

import Gyro from '../../../img/icons/gyro.svg'
import Icon from '../icon'

const GyroIcon = props => {
  return (
    <Icon {...props}>
      <Gyro />
    </Icon>
  )
}

GyroIcon.size = 24

export default GyroIcon
export const GyroSvg = Gyro
