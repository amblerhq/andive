import React from 'react'

import Tpmr from '../../../img/icons/tpmr.svg'
import Icon from '../icon'
import {palette} from '../..'

const TpmrIcon = ({color = palette.darkPrimary, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <Tpmr />
    </Icon>
  )
}

TpmrIcon.size = 24

export default TpmrIcon
export const TpmrSvg = Tpmr
