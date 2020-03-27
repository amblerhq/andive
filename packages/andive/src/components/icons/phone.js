import React from 'react'

import Phone from '../../../img/icons/phone.svg'
import Icon from '../icon'

const PhoneIcon = props => {
  return (
    <Icon {...props}>
      <Phone />
    </Icon>
  )
}

PhoneIcon.size = 24

export default PhoneIcon
export const PhoneSvg = Phone
