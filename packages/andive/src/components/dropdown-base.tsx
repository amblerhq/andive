import React from 'react'
import styled from 'styled-components'

import * as palette from '../constants/palette'

const DropdownBaseRoot = styled.div`
  background: white;

  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 1px 4px 0 ${palette.lightPrimary};
`

interface DropdownBaseProps {
  className?: string
  children: React.ReactNode
}
export function DropdownBase({className, children}: DropdownBaseProps) {
  return <DropdownBaseRoot className={className}>{children}</DropdownBaseRoot>
}
