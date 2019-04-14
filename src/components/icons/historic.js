import React from 'react'

import Historic from '../../../img/icons/historic.svg'
import Icon from '../icon'

const HistoricIcon = props => {
  return (
    <Icon {...props}>
      <Historic />
    </Icon>
  )
}

HistoricIcon.size = 24

export default HistoricIcon
export const HistoricSvg = Historic
