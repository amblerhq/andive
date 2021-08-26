import React from 'react'

import Address from '../../../img/icons/address.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const AddressIcon = ({color = palette.darkPrimary, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Address />
    </SvgIcon>
  )
}

AddressIcon.size = DEFAULT_SIZE

export default AddressIcon
export const AddressSvg = Address
