import React from 'react'

import Phone from '../../../img/icons/phone.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const PhoneIcon = ({color = palette.mediumPrimary, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <Phone />
    </SvgIcon>
  )
}

PhoneIcon.size = 24

export default PhoneIcon
export const PhoneSvg = Phone
