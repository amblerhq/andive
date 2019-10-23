import React from 'react'

import Export from '../../../img/icons/export.svg'
import Icon from '../icon'

const ExportIcon = props => {
  return (
    <Icon {...props}>
      <Export />
    </Icon>
  )
}

ExportIcon.size = 24

export default ExportIcon
export const ExportSvg = Export
