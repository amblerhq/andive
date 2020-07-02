import React from 'react'
import { ReactNodeLike } from 'prop-types'
import styled from 'styled-components'

import {Body1} from './typography'

const Icon = styled.div<Pick<Props, 'align' | 'direction'>>`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  ${({ align }) => align && `align-items: ${align};`}
  ${({ direction }) => direction && `flex-direction: ${direction};`}

`

const IconWrapper = styled.div<Pick<Props, 'iconSize' | 'padding'>>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({iconSize, padding}) =>
    iconSize &&
    `
    width: ${iconSize + (padding ? 2 * padding : 0)}px;
    height: ${iconSize + (padding ? 2 * padding : 0)}px;
  `}
  ${({padding}) => padding && `padding: ${padding}px;`}
`

const ChildrenWrapper = styled<any>(Body1)`
  align-self: center;
`

interface Props {
  className?: string
  icon: ReactNodeLike
  iconSize?: number
  padding?: number,
  align?: string,
  direction?: string,
  children?: ReactNodeLike
}

export default function IconComponent({
  className,
  icon,
  iconSize = 32,
  padding = 4,
  align = "flex-start",
  direction,
  children
}: Props) {
  return (
    <Icon className={className} align={align} direction={direction}>
      <IconWrapper iconSize={iconSize} padding={padding}>{icon}</IconWrapper>
      {children && <ChildrenWrapper>{children}</ChildrenWrapper>}
    </Icon>
  )
}
