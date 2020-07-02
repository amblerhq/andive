import React from 'react'

import Agreement from '../../../img/icons/agreement.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const AgreementIcon = ({color = palette.white, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <Agreement />
    </SvgIcon>
  )
}

AgreementIcon.size = 24

export default AgreementIcon
export const AgreementSvg = Agreement
