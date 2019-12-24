import React from 'react'

import Invoice from '../../../img/icons/invoice.svg'
import Icon from '../icon'

const InvoiceIcon = props => {
  return (
    <Icon {...props}>
      <Invoice />
    </Icon>
  )
}

InvoiceIcon.size = 40

export default InvoiceIcon
export const InvoiceIconSvg = InvoiceIcon
