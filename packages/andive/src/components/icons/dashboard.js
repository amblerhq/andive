import React from 'react'

import Dashboard from '../../../img/icons/dashboard.svg'
import SvgIcon from '..//svg-icon'

const DashboardIcon = props => {
  return (
    <SvgIcon {...props}>
      <Dashboard />
    </SvgIcon>
  )
}

DashboardIcon.size = 40

export default DashboardIcon
export const DashboardSvg = Dashboard
