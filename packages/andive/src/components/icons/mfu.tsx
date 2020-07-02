import React from 'react'

import Mfu from '../../../img/icons/mfu.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const MfuIcon = ({color = palette.white, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <Mfu />
    </SvgIcon>
  )
}

MfuIcon.size = 40

export default MfuIcon
export const MfuSvg = Mfu
