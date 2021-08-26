import React from 'react'

import BellWithCircleBadge from '../../../img/icons/bell-with-circle-badge.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const BellWithCircleBadgeIcon = ({color = palette.darkPrimary, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <BellWithCircleBadge />
    </SvgIcon>
  )
}

BellWithCircleBadgeIcon.size = DEFAULT_SIZE

export default BellWithCircleBadgeIcon
export const BellWithCircleBadgeSvg = BellWithCircleBadge
