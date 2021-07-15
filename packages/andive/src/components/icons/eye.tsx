import React from 'react'

import Eye from '../../../img/icons/eye.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const EyeIcon = ({color = palette.mediumBerryBlue, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <Eye />
    </SvgIcon>
  )
}

EyeIcon.size = 24

export default EyeIcon
export const EyeSvg = Eye
