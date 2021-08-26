import React from 'react'
import Send from '../../../img/icons/send.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 24

const SendIcon = ({color = palette.white, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Send />
    </SvgIcon>
  )
}

SendIcon.size = DEFAULT_SIZE

export default SendIcon
export const SendSvg = Send
