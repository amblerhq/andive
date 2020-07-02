import React from 'react'

import PatientAdd from '../../../img/icons/patient-add.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const PatientAddIcon = ({color = palette.mediumBeetrootPurple, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <PatientAdd />
    </SvgIcon>
  )
}

PatientAddIcon.size = 24

export default PatientAddIcon
export const PatientAddSvg = PatientAdd
