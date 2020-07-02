import React from 'react'

import Export from '../../../img/icons/export.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const ExportIcon = ({color = palette.mediumBerryBlue, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <Export />
    </SvgIcon>
  )
}

ExportIcon.size = 24

export default ExportIcon
export const ExportSvg = Export
