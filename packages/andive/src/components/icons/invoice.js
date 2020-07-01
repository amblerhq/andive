import React from 'react'

import Invoice from '../../../img/icons/invoice.svg'
import Icon from '../icon'
import {palette} from '../..'

const InvoiceIcon = ({color = palette.white, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <Invoice />
    </Icon>
  )
}

InvoiceIcon.size = 40

export default InvoiceIcon
export const InvoiceSvg = Invoice
