import React from 'react'

import Account from '../../../img/icons/account.svg'
import SvgIcon from '../svg-icon'
import {palette} from '../..'

const AccountIcon = ({color = palette.white, ...rest}) => {
  return (
    <SvgIcon color={color} {...rest}>
      <Account />
    </SvgIcon>
  )
}

AccountIcon.size = 24

export default AccountIcon
export const AccountSvg = Account
