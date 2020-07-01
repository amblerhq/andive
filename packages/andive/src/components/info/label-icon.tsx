import React from 'react'
import {ReactNodeLike} from 'prop-types'
import styled, {css} from 'styled-components'

import {Body1} from '../typography'

const LabelIcon = styled.div<Pick<Props, "stickyIcon" | "iconSize">>`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;

  ${props =>
    props.stickyIcon &&
    css`
      position: relative;
      padding-left: ${props.iconSize}px;
    `}
`

const Label = styled(Body1)`
  padding-left: 8px;
`

const IconWrapper = styled.div<Pick<Props, "stickyIcon" | "iconSize">>`
  width: ${props => props.iconSize + 8}px;
  padding: 4px;

  ${props =>
    props.stickyIcon &&
    css`
      position: absolute;
      top: 0;
      left: 0;
    `}
`

interface Props {
  label: ReactNodeLike
  iconSize: number
  className?: string
  icon?: ReactNodeLike
  stickyIcon?: ReactNodeLike
}

export default function LabelIconComponent({className, icon, iconSize = 24, stickyIcon, label, ...typographyProps}: Props) {
  return (
    <LabelIcon className={className} iconSize={iconSize} stickyIcon={stickyIcon}>
      {icon ? (
        <IconWrapper iconSize={iconSize} stickyIcon={stickyIcon}>
          {icon}
        </IconWrapper>
      ) : null}{' '}
      <Label {...typographyProps}>{label}</Label>
    </LabelIcon>
  )
}