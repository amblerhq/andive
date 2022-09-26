import React from 'react'

import PatientInfo from '../../../img/icons/patient-info.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const PatientInfoIcon = ({color = palette.mediumBerryBlue, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <PatientInfo />
    </SvgIcon>
  )
}

PatientInfoIcon.size = DEFAULT_SIZE

export default PatientInfoIcon
export const PatientInfoSvg = PatientInfo
