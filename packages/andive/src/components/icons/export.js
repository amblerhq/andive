import React from 'react'

import Export from '../../../img/icons/export.svg'
import Icon from '../icon'
import {palette} from '../..'

const ExportIcon = ({color = palette.mediumBerryBlue, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <Export />
    </Icon>
  )
}

ExportIcon.size = 24

export default ExportIcon
export const ExportSvg = Export
