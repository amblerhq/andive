import * as palette from '../constants/palette'
import React from 'react'
import styled from 'styled-components'

const HoverEffect = styled.div`
  :hover {
    background: ${palette.lightGrey};
  }
`

export function Hover({children}) {
  return <HoverEffect>{children}</HoverEffect>
}
