import React from 'react'

import Patient from '../../../img/icons/patient.svg'
import Icon from '../icon'

const PatientIcon = props => {
  return (
    <Icon {...props}>
      <Patient />
    </Icon>
  )
}

PatientIcon.size = 24

export default PatientIcon
export const PatientSvg = Patient
