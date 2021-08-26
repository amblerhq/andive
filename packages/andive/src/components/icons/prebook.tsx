import React from 'react'
import Prebook from '../../../img/icons/prebook.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const PrebookIcon = ({color = palette.mediumBerryBlue, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Prebook />
    </SvgIcon>
  )
}

PrebookIcon.size = DEFAULT_SIZE

export default PrebookIcon
export const PrebookSvg = Prebook
