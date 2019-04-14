import React from 'react'

import Address from '../../../img/icons/address.svg'
import Icon from '../icon'

const AddressIcon = props => {
  return (
    <Icon {...props}>
      <Address />
    </Icon>
  )
}

AddressIcon.size = 24

export default AddressIcon
export const AddressSvg = Address
