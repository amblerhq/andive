import React from 'react'

import Back from '../../../img/icons/back.svg'
import SvgIcon from '../svg-icon'

const BackIcon = ({color = '#00aef5', ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <Back />
    </SvgIcon>
  )
}

BackIcon.size = 24

export default BackIcon
export const BackSvg = Back
