import React from 'react'
import Postpone from '../../../img/icons/postpone.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const PostponeIcon = ({color = palette.mediumBerryBlue, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Postpone />
    </SvgIcon>
  )
}

PostponeIcon.size = DEFAULT_SIZE

export default PostponeIcon
export const PostponeSvg = Postpone
