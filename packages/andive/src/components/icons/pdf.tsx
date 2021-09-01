import React from 'react'

import Pdf from '../../../img/icons/pdf.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const PdfIcon = ({color = palette.mediumBerryBlue, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Pdf />
    </SvgIcon>
  )
}

PdfIcon.size = DEFAULT_SIZE

export default PdfIcon
export const PdfSvg = Pdf
