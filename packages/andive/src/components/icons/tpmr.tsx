import React from 'react'

import Tpmr from '../../../img/icons/tpmr.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const TpmrIcon = ({color = palette.darkPrimary, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <Tpmr />
    </SvgIcon>
  )
}

TpmrIcon.size = 24

export default TpmrIcon
export const TpmrSvg = Tpmr
