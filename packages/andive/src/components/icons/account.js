import React from 'react'

import Account from '../../../img/icons/account.svg'
import Icon from '../icon'
import {palette} from '../..'

const AccountIcon = ({color = palette.white, ...rest}) => {
  return (
    <Icon color={color} {...rest}>
      <Account />
    </Icon>
  )
}

AccountIcon.size = 24

export default AccountIcon
export const AccountSvg = Account
