import React from 'react'

import Postpone from '../../../img/icons/postpone.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const PostponeIcon = ({color = palette.mediumBerryBlue, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <Postpone />
    </SvgIcon>
  )
}

PostponeIcon.size = 24

export default PostponeIcon
export const PostponeSvg = Postpone
