import React from 'react'

import PatientRemove from '../../../img/icons/patient-remove.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const PatientRemoveIcon = ({color = palette.mediumBerryBlue, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <PatientRemove />
    </SvgIcon>
  )
}

PatientRemoveIcon.size = 24

export default PatientRemoveIcon
export const PatientRemoveSvg = PatientRemove
