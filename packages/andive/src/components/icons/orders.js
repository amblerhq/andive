import React from 'react'

import Orders from '../../../img/icons/orders.svg'
import Icon from '../icon'
import {palette} from '../..'

const OrdersIcon = ({color = palette.white, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <Orders />
    </Icon>
  )
}

OrdersIcon.size = 40

export default OrdersIcon
export const OrdersSvg = Orders
