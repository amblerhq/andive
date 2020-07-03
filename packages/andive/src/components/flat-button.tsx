import React, { DOMAttributes } from 'react'
import styled, { css } from 'styled-components'

import { Body2 } from './typography'
import * as palette from '../constants/palette'

const FlatButtonWrapper = styled.div<{ invert?: boolean; active?: boolean, hasLabel?: boolean }>`
  &:hover {
    background-color: ${props =>
      props.invert
        ? palette.hexToRGBA(palette.darkGrey, 0.2)
        : props.theme.hover.backgroundColor};
    border-radius: ${props => props.theme.hover.borderRadius}px;
  }

  ${props =>
    props.active &&
    css`
      background-color: ${props.invert
        ? palette.hexToRGBA(palette.darkGrey, 0.2)
        : props.theme.hover.backgroundColor};
      border-radius: ${props.theme.hover.borderRadius}px;
    `}

  ${props => !props.hasLabel && css`
    width: 40px;
  `}

  button {
    outline: none;
    border: none;
    background: none;
    cursor: pointer;
    margin: 0;
    padding: 0;

    ${props => props.hasLabel && css`
      width: 100%;
      display: flex;
    `}
  }
`

const IconWrapper = styled.div`
  padding: 8px;
  width: 40px;
  height: 40px;
`
const LabelWrapper = styled.div`
  padding: 8px 8px 8px 0;
`

interface FlatButtonProps {
  className?: string
  icon?: JSX.Element
  label?: string
  onClick: DOMAttributes<HTMLButtonElement>["onClick"]
  color?: string
  active?: boolean
}
export const FlatButton = ({ color = palette.mediumBerryBlue, onClick, className, icon, label, active }: FlatButtonProps) => {
  return (
    <FlatButtonWrapper className={className} hasLabel={Boolean(label)} active={active}>
      <button onClick={onClick}>
        {icon && <IconWrapper>
          {icon}
        </IconWrapper>}
        {label && <LabelWrapper>
            <Body2 color={color}>{label}</Body2>
        </LabelWrapper>}
      </button>
    </FlatButtonWrapper>
  )
}
