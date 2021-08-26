import React from 'react'

import ConnectAs from '../../../img/icons/connect-as.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const ConnectAsIcon = ({color = palette.mediumBerryBlue, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <ConnectAs />
    </SvgIcon>
  )
}

ConnectAsIcon.size = DEFAULT_SIZE

export default ConnectAsIcon
export const ConnectAsSvg = ConnectAs
