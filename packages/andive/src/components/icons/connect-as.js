import React from 'react'

import ConnectAs from '../../../img/icons/connect-as.svg'
import Icon from '../icon'
import {palette} from '../..'

const ConnectAsIcon = ({color = palette.mediumBerryBlue, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <ConnectAs />
    </Icon>
  )
}

ConnectAsIcon.size = 24

export default ConnectAsIcon
export const ConnectAsSvg = ConnectAs
