import React from 'react'

import Dashboard from '../../../img/icons/dashboard.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DashboardIcon = ({color = palette.white, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <Dashboard />
    </SvgIcon>
  )
}

DashboardIcon.size = 40

export default DashboardIcon
export const DashboardSvg = Dashboard
