import React from 'react'

import AddressRemove from '../../../img/icons/address-remove.svg'
import SvgIcon from '../svg-icon'

const AddressRemoveIcon = props => {
  return (
    <SvgIcon {...props}>
      <AddressRemove />
    </SvgIcon>
  )
}

AddressRemoveIcon.size = 24

export default AddressRemoveIcon
export const AddressRemoveSvg = AddressRemove
