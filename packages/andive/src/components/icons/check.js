import React from 'react'

import Check from '../../../img/icons/check.svg'
import Icon from '../icon'

const CheckIcon = props => {
  return (
    <Icon {...props}>
      <Check />
    </Icon>
  )
}

CheckIcon.size = 24

export default CheckIcon
export const CheckSvg = Check
