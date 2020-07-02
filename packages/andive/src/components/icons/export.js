import React from 'react'

import Export from '../../../img/icons/export.svg'
import SvgIcon from '../svg-icon'

const ExportIcon = props => {
  return (
    <SvgIcon {...props}>
      <Export />
    </SvgIcon>
  )
}

ExportIcon.size = 24

export default ExportIcon
export const ExportSvg = Export
