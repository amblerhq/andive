import React from 'react'

import Address from '../../../img/icons/address.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const AddressIcon = ({color = palette.darkPrimary, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <Address />
    </SvgIcon>
  )
}

AddressIcon.size = 24

export default AddressIcon
export const AddressSvg = Address
