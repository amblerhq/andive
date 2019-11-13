import React from 'react'

import Euro from '../../../img/icons/euro.svg'
import Icon from '../icon'

const EuroIcon = props => {
  return (
    <Icon {...props}>
      <Euro />
    </Icon>
  )
}

EuroIcon.size = 24

export default EuroIcon
export const EuroSvg = Euro
