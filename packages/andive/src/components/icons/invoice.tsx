import React from 'react'

import Invoice from '../../../img/icons/invoice.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 40

const InvoiceIcon = ({color = palette.white, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Invoice />
    </SvgIcon>
  )
}

InvoiceIcon.size = DEFAULT_SIZE

export default InvoiceIcon
export const InvoiceSvg = Invoice
