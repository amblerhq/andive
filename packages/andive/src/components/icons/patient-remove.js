import React from 'react'

import PatientRemove from '../../../img/icons/patient-remove.svg'
import Icon from '../icon'

const PatientRemoveIcon = props => {
  return (
    <Icon {...props}>
      <PatientRemove />
    </Icon>
  )
}

PatientRemoveIcon.size = 24

export default PatientRemoveIcon
export const PatientRemoveSvg = PatientRemove
