import React from 'react'

import BellWithCircleBadge from '../../../img/icons/bell-with-circle-badge.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const BellWithCircleBadgeIcon = ({color = palette.darkPrimary, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <BellWithCircleBadge />
    </SvgIcon>
  )
}

BellWithCircleBadgeIcon.size = 24

export default BellWithCircleBadgeIcon
export const BellWithCircleBadgeSvg = BellWithCircleBadge
