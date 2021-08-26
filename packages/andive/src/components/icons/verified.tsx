import React from 'react'
import Verified from '../../../img/icons/verified.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const VerifiedIcon = ({color = palette.darkPrimary, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Verified />
    </SvgIcon>
  )
}

VerifiedIcon.size = DEFAULT_SIZE

export default VerifiedIcon
export const VerifiedSvg = Verified
