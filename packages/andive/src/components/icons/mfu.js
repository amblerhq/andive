import React from 'react'

import Mfu from '../../../img/icons/mfu.svg'
import Icon from '../icon'

const MfuIcon = props => {
  return (
    <Icon {...props}>
      <Mfu />
    </Icon>
  )
}

MfuIcon.size = 40

export default MfuIcon
export const MfuSvg = Mfu
