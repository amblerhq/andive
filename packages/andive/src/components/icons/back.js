import React from 'react'

import Back from '../../../img/icons/back.svg'
import Icon from '../icon'

const BackIcon = props => {
  return (
    <Icon {...props}>
      <Back />
    </Icon>
  )
}

BackIcon.size = 24

export default BackIcon
export const BackSvg = Back
