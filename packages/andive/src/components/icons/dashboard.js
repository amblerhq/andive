import React from 'react'

import Dashboard from '../../../img/icons/dashboard.svg'
import Icon from '../icon'

const DashboardIcon = props => {
  return (
    <Icon {...props}>
      <Dashboard />
    </Icon>
  )
}

DashboardIcon.size = 40

export default DashboardIcon
export const DashboardSvg = Dashboard
