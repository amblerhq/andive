import React from 'react'

import Patient from '../../../img/icons/patient.svg'
import SvgIcon from '../svg-icon'

const PatientIcon = props => {
  return (
    <SvgIcon {...props}>
      <Patient />
    </SvgIcon>
  )
}

PatientIcon.size = 24

export default PatientIcon
export const PatientSvg = Patient
