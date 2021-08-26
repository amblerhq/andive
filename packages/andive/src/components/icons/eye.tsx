import React from 'react'

import Eye from '../../../img/icons/eye.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const EyeIcon = ({color = palette.mediumBerryBlue, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Eye />
    </SvgIcon>
  )
}

EyeIcon.size = DEFAULT_SIZE

export default EyeIcon
export const EyeSvg = Eye
