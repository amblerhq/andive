import React from 'react'
import New from '../../../img/icons/new.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const NewIcon = ({color = palette.white, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <New />
    </SvgIcon>
  )
}

NewIcon.size = DEFAULT_SIZE

export default NewIcon
export const NewSvg = New
