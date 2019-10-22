import React from 'react'

import AddressRemove from '../../../img/icons/address-remove.svg'
import Icon from '../icon'

const AddressRemoveIcon = props => {
  return (
    <Icon {...props}>
      <AddressRemove />
    </Icon>
  )
}

AddressRemoveIcon.size = 24

export default AddressRemoveIcon
export const AddressRemoveSvg = AddressRemove
