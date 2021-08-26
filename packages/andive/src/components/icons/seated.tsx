import React from 'react'
import Seated from '../../../img/icons/seated.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const SeatedIcon = ({color = palette.darkPrimary, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Seated />
    </SvgIcon>
  )
}

SeatedIcon.size = DEFAULT_SIZE

export default SeatedIcon
export const SeatedSvg = Seated
