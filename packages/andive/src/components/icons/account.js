import React from 'react'

import Account from '../../../img/icons/account.svg'
import SvgIcon from '../svg-icon'

const AccountIcon = props => {
  return (
    <SvgIcon {...props}>
      <Account />
    </SvgIcon>
  )
}

AccountIcon.size = 24

export default AccountIcon
export const AccountSvg = Account
