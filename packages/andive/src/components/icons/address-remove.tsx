import React from 'react'

import AddressRemove from '../../../img/icons/address-remove.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const AddressRemoveIcon = ({color = palette.darkPotatoYellow, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <AddressRemove />
    </SvgIcon>
  )
}

AddressRemoveIcon.size = DEFAULT_SIZE

export default AddressRemoveIcon
export const AddressRemoveSvg = AddressRemove
