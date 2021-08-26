import React from 'react'

import Export from '../../../img/icons/export.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const ExportIcon = ({color = palette.mediumBerryBlue, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Export />
    </SvgIcon>
  )
}

ExportIcon.size = DEFAULT_SIZE

export default ExportIcon
export const ExportSvg = Export
