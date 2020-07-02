import React from 'react'

import Gyro from '../../../img/icons/gyro.svg'
import SvgIcon from '..//svg-icon'

const GyroIcon = props => {
  return (
    <SvgIcon {...props}>
      <Gyro />
    </SvgIcon>
  )
}

GyroIcon.size = 24

export default GyroIcon
export const GyroSvg = Gyro
