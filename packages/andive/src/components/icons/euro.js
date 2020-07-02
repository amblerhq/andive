import React from 'react'

import Euro from '../../../img/icons/euro.svg'
import SvgIcon from '..//svg-icon'

const EuroIcon = props => {
  return (
    <SvgIcon {...props}>
      <Euro />
    </SvgIcon>
  )
}

EuroIcon.size = 24

export default EuroIcon
export const EuroSvg = Euro
