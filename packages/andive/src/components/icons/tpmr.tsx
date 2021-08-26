import React from 'react'
import Tpmr from '../../../img/icons/tpmr.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 22

const TpmrIcon = ({color = palette.darkPrimary, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Tpmr />
    </SvgIcon>
  )
}

TpmrIcon.size = DEFAULT_SIZE

export default TpmrIcon
export const TpmrSvg = Tpmr
