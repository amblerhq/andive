import React from 'react'
import { ReactNodeLike } from 'prop-types'
import styled from 'styled-components'

import Box from './box'

const Icon = styled.div<Pick<Props, 'align' | 'direction'>>`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  ${({ align }) => align && `align-items: ${align};`}
  ${({ direction }) => direction && `flex-direction: ${direction};`}

`

const IconWrapper = styled.div<Pick<Props, 'iconSize'>>`
  display: flex;
  flex: 0 0 ${({iconSize}) => iconSize}px;
  justify-content: center;
  align-items: center;
  height: ${({iconSize}) => iconSize}px;
`

interface Props {
  className?: string
  icon: ReactNodeLike
  iconSize?: number
  align?: string,
  direction?: string,
  children?: ReactNodeLike
}

export default function IconComponent({
  className,
  icon,
  iconSize = 40,
  align = "flex-start",
  direction,
  children
}: Props) {
  return (
    <Icon className={className} align={align} direction={direction}>
      <IconWrapper iconSize={iconSize}>{icon}</IconWrapper>
      <Box>{children}</Box>
    </Icon>
  )
}
