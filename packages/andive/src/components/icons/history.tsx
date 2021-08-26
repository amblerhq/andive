import React from 'react'

import History from '../../../img/icons/history.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const HistoryIcon = ({color = palette.darkPrimary, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <History />
    </SvgIcon>
  )
}

HistoryIcon.size = DEFAULT_SIZE

export default HistoryIcon
export const HistorySvg = History
