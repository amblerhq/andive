import React from 'react'
import styled from 'styled-components'

const BoxRoot = styled.div`
  padding: ${props => props.theme.padding}px;
  width: 100%;
`

export interface Props {
  className?: string;
  children?: React.ReactNode
}

const BoxComponent = ({children, className, ...props}: Props) => {
  return (
    <BoxRoot className={className} {...props} >
      {children}
    </BoxRoot>
  )
}

export default BoxComponent
