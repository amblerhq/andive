import React from 'react'

import AddressRemove from '../../../img/icons/address-remove.svg'
import Icon from '../icon'
import {palette} from '../..'

const AddressRemoveIcon = ({color = palette.darkPotatoYellow, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <AddressRemove />
    </Icon>
  )
}

AddressRemoveIcon.size = 24

export default AddressRemoveIcon
export const AddressRemoveSvg = AddressRemove
