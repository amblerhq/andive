import React from 'react'

import Agreement from '../../../img/icons/agreement.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const AgreementIcon = ({color = palette.white, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Agreement />
    </SvgIcon>
  )
}

AgreementIcon.size = DEFAULT_SIZE

export default AgreementIcon
export const AgreementSvg = Agreement
