import React from 'react'
import styled from 'styled-components'

const HSpaceRoot = styled.div<{px: number}>`
  width: ${props => props.px}px;
  flex: 0 0 ${props => props.px}px;
`
export function HSpace({px}: {px: number}) {
  return <HSpaceRoot px={px} />
}
