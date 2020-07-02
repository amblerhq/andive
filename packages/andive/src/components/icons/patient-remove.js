import React from 'react'

import PatientRemove from '../../../img/icons/patient-remove.svg'
import SvgIcon from '..//svg-icon'

const PatientRemoveIcon = props => {
  return (
    <SvgIcon {...props}>
      <PatientRemove />
    </SvgIcon>
  )
}

PatientRemoveIcon.size = 24

export default PatientRemoveIcon
export const PatientRemoveSvg = PatientRemove
