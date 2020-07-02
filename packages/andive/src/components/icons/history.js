import React from 'react'

import History from '../../../img/icons/history.svg'
import SvgIcon from '..//svg-icon'

const HistoryIcon = props => {
  return (
    <SvgIcon {...props}>
      <History />
    </SvgIcon>
  )
}

HistoryIcon.size = 24

export default HistoryIcon
export const HistorySvg = History
