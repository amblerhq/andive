import React from 'react'

import Mf from '../../../img/icons/mf.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const MfIcon = ({color = palette.white, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <Mf />
    </SvgIcon>
  )
}

MfIcon.size = 40

export default MfIcon
export const MfSvg = Mf
