import React from 'react'

import PatientAdd from '../../../img/icons/patient-add.svg'
import Icon from '../icon'
import {palette} from '../..'

const PatientAddIcon = ({color = palette.mediumBeetrootPurple, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <PatientAdd />
    </Icon>
  )
}

PatientAddIcon.size = 24

export default PatientAddIcon
export const PatientAddSvg = PatientAdd
