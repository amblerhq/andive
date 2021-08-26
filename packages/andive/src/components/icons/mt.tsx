import React from 'react'
import Mt from '../../../img/icons/mt.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 40

const MtIcon = ({color = palette.white, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Mt />
    </SvgIcon>
  )
}

MtIcon.size = DEFAULT_SIZE

export default MtIcon
export const MtSvg = Mt
