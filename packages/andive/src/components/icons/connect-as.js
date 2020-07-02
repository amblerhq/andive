import React from 'react'

import ConnectAs from '../../../img/icons/connect-as.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const ConnectAsIcon = ({color = palette.mediumBerryBlue, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <ConnectAs />
    </SvgIcon>
  )
}

ConnectAsIcon.size = 24

export default ConnectAsIcon
export const ConnectAsSvg = ConnectAs
