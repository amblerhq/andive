import React from 'react'
import Unprebook from '../../../img/icons/unprebook.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const UnprebookIcon = ({color = palette.darkPrimary, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Unprebook />
    </SvgIcon>
  )
}

UnprebookIcon.size = DEFAULT_SIZE

export default UnprebookIcon
export const UnprebookSvg = Unprebook
