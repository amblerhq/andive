import React from 'react'

import Patient from '../../../img/icons/patient.svg'
import Icon from '../icon'
import {palette} from '../..'

const PatientIcon = ({color = palette.darkPrimary, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <Patient />
    </Icon>
  )
}

PatientIcon.size = 24

export default PatientIcon
export const PatientSvg = Patient
