import React from 'react'

import UploadInvoice from '../../../img/icons/upload-invoice.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const UploadInvoiceIcon = ({color = palette.mediumBerryBlue, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <UploadInvoice />
    </SvgIcon>
  )
}

UploadInvoiceIcon.size = DEFAULT_SIZE

export default UploadInvoiceIcon
export const UploadInvoiceSvg = UploadInvoice
