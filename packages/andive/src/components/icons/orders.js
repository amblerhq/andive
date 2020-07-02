import React from 'react'

import Orders from '../../../img/icons/orders.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const OrdersIcon = ({color = palette.white, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <Orders />
    </SvgIcon>
  )
}

OrdersIcon.size = 40

export default OrdersIcon
export const OrdersSvg = Orders
