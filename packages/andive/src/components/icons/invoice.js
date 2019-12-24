import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Invoice from '../../../img/icons/invoice.svg'
import Icon from '../icon'

const InvoiceOverride = styled(Invoice)`
  & > g > text {
    fill: ${props => props.color};
  }
`

const InvoiceIcon = props => {
  return (
    <Icon {...props}>
      <InvoiceOverride color={props.color} />
    </Icon>
  )
}

InvoiceIcon.propTypes = {
  color: PropTypes.string
}
InvoiceOverride.size = 40

export default InvoiceIcon
export const InvoiceSvg = Invoice
