import React from 'react'
import PatientRemove from '../../../img/icons/patient-remove.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const PatientRemoveIcon = ({color = palette.mediumBerryBlue, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <PatientRemove />
    </SvgIcon>
  )
}

PatientRemoveIcon.size = DEFAULT_SIZE

export default PatientRemoveIcon
export const PatientRemoveSvg = PatientRemove
