import React from 'react'

import Verified from '../../../img/icons/verified.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const VerifiedIcon = ({color = palette.darkPrimary, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <Verified />
    </SvgIcon>
  )
}

VerifiedIcon.size = 24

export default VerifiedIcon
export const VerifiedSvg = Verified
