import React from 'react'

import EditAgreement from '../../../img/icons/edit-agreement.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

export default function EditAgreementIcon({color = palette.mediumBerryBlue, size = DEFAULT_SIZE, ...rest}) {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <EditAgreement />
    </SvgIcon>
  )
}
