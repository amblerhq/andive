import React from 'react'

import Stamp from '../../../img/icons/stamp.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const StampIcon = ({color = palette.white, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <Stamp />
    </SvgIcon>
  )
}

StampIcon.size = 40

export default StampIcon
export const StampSvg = Stamp
