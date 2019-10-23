import React from 'react'

import Orders from '../../../img/icons/orders.svg'
import Icon from '../icon'

const OrdersIcon = props => {
  return (
    <Icon {...props}>
      <Orders />
    </Icon>
  )
}

OrdersIcon.size = 40

export default OrdersIcon
export const OrdersSvg = Orders
