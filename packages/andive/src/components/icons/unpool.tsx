import React from 'react'
import Unpool from '../../../img/icons/unpool.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const UnpoolIcon = ({color = palette.mediumBerryBlue, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Unpool />
    </SvgIcon>
  )
}

UnpoolIcon.size = DEFAULT_SIZE

export default UnpoolIcon
export const UnpoolSvg = Unpool
