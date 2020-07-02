import React from 'react'

import AddressRemove from '../../../img/icons/address-remove.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const AddressRemoveIcon = ({color = palette.darkPotatoYellow, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <AddressRemove />
    </SvgIcon>
  )
}

AddressRemoveIcon.size = 24

export default AddressRemoveIcon
export const AddressRemoveSvg = AddressRemove
