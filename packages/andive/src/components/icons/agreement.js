import React from 'react'

import Agreement from '../../../img/icons/agreement.svg'
import Icon from '../icon'

const AgreementIcon = props => {
  return (
    <Icon {...props}>
      <Agreement />
    </Icon>
  )
}

AgreementIcon.size = 24

export default AgreementIcon
export const AgreementSvg = Agreement
