import React from 'react'

import CheckboxOff from '../../../img/icons/off-squared.svg'
import Icon from '../icon'

const CheckboxOffIcon = props => {
  return (
    <Icon {...props}>
      <CheckboxOff />
    </Icon>
  )
}

CheckboxOffIcon.size = 24

export default CheckboxOffIcon
export const CheckboxOffSvg = CheckboxOff
