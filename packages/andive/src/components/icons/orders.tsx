import React from 'react'
import Orders from '../../../img/icons/orders.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 40

const OrdersIcon = ({color = palette.white, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Orders />
    </SvgIcon>
  )
}

OrdersIcon.size = DEFAULT_SIZE

export default OrdersIcon
export const OrdersSvg = Orders
