import React from 'react'
import Patient from '../../../img/icons/patient.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const PatientIcon = ({color = palette.darkPrimary, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Patient />
    </SvgIcon>
  )
}

PatientIcon.size = DEFAULT_SIZE

export default PatientIcon
export const PatientSvg = Patient
