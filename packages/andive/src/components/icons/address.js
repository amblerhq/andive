import React from 'react'

import Address from '../../../img/icons/address.svg'
import Icon from '../icon'
import {palette} from '../..'

const AddressIcon = ({color = palette.darkPrimary, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <Address />
    </Icon>
  )
}

AddressIcon.size = 24

export default AddressIcon
export const AddressSvg = Address
