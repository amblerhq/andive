import React from 'react'
import Mfu from '../../../img/icons/mfu.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 40

const MfuIcon = ({color = palette.white, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Mfu />
    </SvgIcon>
  )
}

MfuIcon.size = DEFAULT_SIZE

export default MfuIcon
export const MfuSvg = Mfu
