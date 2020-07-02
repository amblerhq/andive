import React from 'react'

import PatientAdd from '../../../img/icons/patient-add.svg'
import SvgIcon from '..//svg-icon'

const PatientAddIcon = props => {
  return (
    <SvgIcon {...props}>
      <PatientAdd />
    </SvgIcon>
  )
}

PatientAddIcon.size = 24

export default PatientAddIcon
export const PatientAddSvg = PatientAdd
