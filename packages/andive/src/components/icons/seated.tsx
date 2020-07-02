import React from 'react'

import Seated from '../../../img/icons/seated.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const SeatedIcon = ({color = palette.darkPrimary, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <Seated />
    </SvgIcon>
  )
}

SeatedIcon.size = 24

export default SeatedIcon
export const SeatedSvg = Seated
