import React from 'react'

import History from '../../../img/icons/history.svg'
import Icon from '../icon'

const HistoryIcon = props => {
  return (
    <Icon {...props}>
      <History />
    </Icon>
  )
}

HistoryIcon.size = 24

export default HistoryIcon
export const HistorySvg = History
