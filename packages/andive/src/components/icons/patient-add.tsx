import React from 'react'
import PatientAdd from '../../../img/icons/patient-add.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const PatientAddIcon = ({color = palette.darkBeetrootPurple, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <PatientAdd />
    </SvgIcon>
  )
}

PatientAddIcon.size = DEFAULT_SIZE

export default PatientAddIcon
export const PatientAddSvg = PatientAdd
