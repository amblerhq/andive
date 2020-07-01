import React from 'react'

import Dashboard from '../../../img/icons/dashboard.svg'
import Icon from '../icon'
import {palette} from '../..'

const DashboardIcon = ({color = palette.white, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <Dashboard />
    </Icon>
  )
}

DashboardIcon.size = 40

export default DashboardIcon
export const DashboardSvg = Dashboard
