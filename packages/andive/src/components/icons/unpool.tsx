import React from 'react'

import Unpool from '../../../img/icons/unpool.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const UnpoolIcon = ({color = palette.mediumBerryBlue, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <Unpool />
    </SvgIcon>
  )
}

UnpoolIcon.size = 24

export default UnpoolIcon
export const UnpoolSvg = Unpool
