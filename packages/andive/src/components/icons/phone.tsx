import React from 'react'
import Phone from '../../../img/icons/phone.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const PhoneIcon = ({color = palette.mediumPrimary, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Phone />
    </SvgIcon>
  )
}

PhoneIcon.size = DEFAULT_SIZE

export default PhoneIcon
export const PhoneSvg = Phone
