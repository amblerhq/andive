import React from 'react'

import History from '../../../img/icons/history.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const HistoryIcon = ({color = palette.darkPrimary, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <History />
    </SvgIcon>
  )
}

HistoryIcon.size = 24

export default HistoryIcon
export const HistorySvg = History
