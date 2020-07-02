import React from 'react'

import Phone from '../../../img/icons/phone.svg'
import SvgIcon from '../svg-icon'

const PhoneIcon = props => {
  return (
    <SvgIcon {...props}>
      <Phone />
    </SvgIcon>
  )
}

PhoneIcon.size = 24

export default PhoneIcon
export const PhoneSvg = Phone
