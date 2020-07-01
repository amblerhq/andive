import React from 'react'

import Phone from '../../../img/icons/phone.svg'
import Icon from '../icon'
import {palette} from '../..'

const PhoneIcon = ({color = palette.mediumPrimary, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <Phone />
    </Icon>
  )
}

PhoneIcon.size = 24

export default PhoneIcon
export const PhoneSvg = Phone
