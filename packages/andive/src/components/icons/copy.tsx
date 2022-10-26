import React from 'react'

import Copy from '../../../img/icons/copy.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 22

const CopyIcon = ({color = palette.mediumPrimary, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Copy />
    </SvgIcon>
  )
}

CopyIcon.size = DEFAULT_SIZE

export default CopyIcon
export const CopySvg = Copy
