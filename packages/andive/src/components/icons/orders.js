import React from 'react'

import Orders from '../../../img/icons/orders.svg'
import SvgIcon from '../svg-icon'

const OrdersIcon = props => {
  return (
    <SvgIcon {...props}>
      <Orders />
    </SvgIcon>
  )
}

OrdersIcon.size = 40

export default OrdersIcon
export const OrdersSvg = Orders
