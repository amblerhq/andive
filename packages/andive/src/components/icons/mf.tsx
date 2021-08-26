import React from 'react'
import Mf from '../../../img/icons/mf.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 40

const MfIcon = ({color = palette.white, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Mf />
    </SvgIcon>
  )
}

MfIcon.size = DEFAULT_SIZE

export default MfIcon
export const MfSvg = Mf
