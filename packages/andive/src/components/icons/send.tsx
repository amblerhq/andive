import React from 'react'

import Send from '../../../img/icons/send.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const SendIcon = ({color = palette.white, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <Send />
    </SvgIcon>
  )
}

SendIcon.size = 40

export default SendIcon
export const SendSvg = Send
