import React from 'react'

import New from '../../../img/icons/new.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const NewIcon = ({color = palette.white, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <New />
    </SvgIcon>
  )
}

NewIcon.size = 24

export default NewIcon
export const NewSvg = New
