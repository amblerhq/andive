import React from 'react'

import Invoice from '../../../img/icons/invoice.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const InvoiceIcon = ({color = palette.white, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <Invoice />
    </SvgIcon>
  )
}

InvoiceIcon.size = 40

export default InvoiceIcon
export const InvoiceSvg = Invoice
