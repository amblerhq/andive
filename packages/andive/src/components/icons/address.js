import React from 'react'

import Address from '../../../img/icons/address.svg'
import SvgIcon from '../svg-icon'

const AddressIcon = props => {
  return (
    <SvgIcon {...props}>
      <Address />
    </SvgIcon>
  )
}

AddressIcon.size = 24

export default AddressIcon
export const AddressSvg = Address
