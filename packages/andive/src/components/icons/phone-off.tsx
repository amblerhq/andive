import React from 'react'

import PhoneOff from '../../../img/icons/phone-off.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const PhoneOffIcon = ({color = palette.mediumBerryBlue, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <PhoneOff />
    </SvgIcon>
  )
}

PhoneOffIcon.size = DEFAULT_SIZE

export default PhoneOffIcon
