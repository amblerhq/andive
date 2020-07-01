import React from 'react'

import Agreement from '../../../img/icons/agreement.svg'
import Icon from '../icon'
import {palette} from '../..'

const AgreementIcon = ({color = palette.white, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <Agreement />
    </Icon>
  )
}

AgreementIcon.size = 24

export default AgreementIcon
export const AgreementSvg = Agreement
