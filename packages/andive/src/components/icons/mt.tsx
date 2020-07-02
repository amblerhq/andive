import React from 'react'

import Mt from '../../../img/icons/mt.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const MtIcon = ({color = palette.white, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <Mt />
    </SvgIcon>
  )
}

MtIcon.size = 40

export default MtIcon
export const MtSvg = Mt
