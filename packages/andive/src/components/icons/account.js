import React from 'react'

import Account from '../../../img/icons/account.svg'
import Icon from '../icon'

const AccountIcon = props => {
  return (
    <Icon {...props}>
      <Account />
    </Icon>
  )
}

AccountIcon.size = 24

export default AccountIcon
export const AccountSvg = Account
