import React from 'react'
import styled from 'styled-components'

import * as palette from '../constants/palette'

const DropdownBaseRoot = styled.div`
  background: white;

  padding: 8px;
  border-radius: 8px;
  box-shadow: 0 1px 4px 0 ${palette.hexToRGBA(palette.darkPrimary, 0.3)};
`

export function DropdownBase({ className, children }) {
  return <DropdownBaseRoot className={className}>
    {children}
  </DropdownBaseRoot>
}