import React from 'react'

import Back from '../../../img/icons/back.svg'
import SvgIcon from '../svg-icon'

const DEFAULT_SIZE = 24

const BackIcon = ({color = '#00aef5', size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Back />
    </SvgIcon>
  )
}

BackIcon.size = DEFAULT_SIZE

export default BackIcon
export const BackSvg = Back
