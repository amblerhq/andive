import React from 'react'
import { ReactNodeLike } from 'prop-types'
import styled from 'styled-components'

import {Body1} from './typography'

const Icon = styled.div<Pick<Props, 'iconSize' | 'align'>>`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  ${({ align }) => align && `align-items: ${align};`}

`

const IconWrapper = styled.div<Pick<Props, 'iconSize'>>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({iconSize}) => iconSize && `
    width: ${iconSize + 8}px;
    height: ${iconSize + 8}px;
  `}
  padding: 4px;
`

const ChildrenWrapper = styled<any>(Body1)`
  align-self: center;
`

interface Props {
  className?: string
  icon: ReactNodeLike
  iconSize?: number
  align: "flex-start" | "flex-end" | "center",
  children?: ReactNodeLike
}

export default function IconComponent({
  className,
  icon,
  iconSize,
  align = "flex-start",
  children
}: Props) {
  return (
    <Icon className={className} iconSize={iconSize} align={align}>
      <IconWrapper iconSize={iconSize}>{icon}</IconWrapper>
      {children && <ChildrenWrapper>{children}</ChildrenWrapper>}
    </Icon>
  )
}
