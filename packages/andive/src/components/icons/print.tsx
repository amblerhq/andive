import React from 'react'

import Print from '../../../img/icons/print.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 40

const PrintIcon = ({color = palette.white, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Print />
    </SvgIcon>
  )
}

PrintIcon.size = DEFAULT_SIZE

export default PrintIcon
export const PrintSvg = Print
