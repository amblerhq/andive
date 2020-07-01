import React from 'react'

import History from '../../../img/icons/history.svg'
import Icon from '../icon'
import {palette} from '../..'

const HistoryIcon = ({color = palette.darkPrimary, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <History />
    </Icon>
  )
}

HistoryIcon.size = 24

export default HistoryIcon
export const HistorySvg = History
