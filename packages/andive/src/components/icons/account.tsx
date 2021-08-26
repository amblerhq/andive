import React from 'react'

import Account from '../../../img/icons/account.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const DEFAULT_SIZE = 40

const AccountIcon = ({color = palette.white, size = DEFAULT_SIZE, ...rest}) => {
  return (
    <SvgIcon color={color} size={size} {...rest}>
      <Account />
    </SvgIcon>
  )
}

AccountIcon.size = DEFAULT_SIZE

export default AccountIcon
export const AccountSvg = Account
