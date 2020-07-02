import React from 'react'

import Patient from '../../../img/icons/patient.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const PatientIcon = ({color = palette.darkPrimary, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <Patient />
    </SvgIcon>
  )
}

PatientIcon.size = 24

export default PatientIcon
export const PatientSvg = Patient
