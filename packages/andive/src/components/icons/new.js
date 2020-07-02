import React from 'react'

import New from '../../../img/icons/new.svg'
import Icon from '../icon'
import {palette} from '../..'

const NewIcon = ({color = palette.white, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <New />
    </Icon>
  )
}

NewIcon.size = 24

export default NewIcon
export const NewSvg = New
