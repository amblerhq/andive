import React from 'react'

import Dashboard from '../../../img/icons/dashboard.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 40

const DashboardIcon = ({color = palette.white, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Dashboard />
    </SvgIcon>
  )
}

DashboardIcon.size = DEFAULT_SIZE

export default DashboardIcon
export const DashboardSvg = Dashboard
