import React from 'react'

import Agreement from '../../../img/icons/agreement.svg'
import SvgIcon from '../svg-icon'

const AgreementIcon = props => {
  return (
    <SvgIcon {...props}>
      <Agreement />
    </SvgIcon>
  )
}

AgreementIcon.size = 24

export default AgreementIcon
export const AgreementSvg = Agreement
