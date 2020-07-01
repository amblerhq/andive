import React from 'react'

import Back from '../../../img/icons/back.svg'
import Icon from '../icon'

const BackIcon = ({color = '#00aef5', ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <Back />
    </Icon>
  )
}

BackIcon.size = 24

export default BackIcon
export const BackSvg = Back
