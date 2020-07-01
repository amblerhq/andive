import React from 'react'

import Mfu from '../../../img/icons/mfu.svg'
import Icon from '../icon'
import {palette} from '../..'

const MfuIcon = ({color = palette.white, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <Mfu />
    </Icon>
  )
}

MfuIcon.size = 40

export default MfuIcon
export const MfuSvg = Mfu
