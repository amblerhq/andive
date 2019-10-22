import React from 'react'

import PatientAdd from '../../../img/icons/patient-add.svg'
import Icon from '../icon'

const PatientAddIcon = props => {
  return (
    <Icon {...props}>
      <PatientAdd />
    </Icon>
  )
}

PatientAddIcon.size = 24

export default PatientAddIcon
export const PatientAddSvg = PatientAdd
