import React, { DOMAttributes } from 'react'
import styled, { css } from 'styled-components'

import HSpace from './h-space'
import { Body2 } from './typography'
import Loader from './loader'
import * as palette from '../constants/palette'

const FlatButtonWrapper = styled.div<{
  invert?: boolean
  active?: boolean
  hasLabel?: boolean
  disabled?: boolean
  reverse?: boolean
  loading?: boolean
}>`
  ${props =>
    !props.disabled &&
    !props.loading &&
    css`
      &:hover {
        background-color: ${props.invert
          ? palette.hexToRGBA(palette.darkGrey, 0.2)
          : props.theme.hover.backgroundColor};
        border-radius: ${props.theme.hover.borderRadius}px;
      }
    `}

  ${props =>
    props.active &&
    css`
      background-color: ${props.invert
        ? palette.hexToRGBA(palette.darkGrey, 0.2)
        : props.theme.hover.backgroundColor};
      border-radius: ${props.theme.hover.borderRadius}px;
    `}

  ${props =>
    (props.disabled || props.loading) &&
    css`
      *[data-andive-type='typography'],
      svg {
        color: ${palette.lightPrimary};
      }
    `}

  ${props =>
    !props.hasLabel &&
    css`
      width: 40px;
      height: 40px;
    `}

  button {
    outline: none;
    border: none;
    background: none;
    cursor: ${props => (props.disabled ? 'not-allowed' : props.loading ? 'progress' : 'pointer')};
    margin: 0;
    padding: 0;

    display: flex;
    flex-flow: ${props => (props.reverse ? 'row-reverse' : 'row')} nowrap;

    ${props =>
      props.hasLabel &&
      css`
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
  padding: 8px 0;
`

interface FlatButtonProps {
  className?: string
  icon?: JSX.Element
  rightIcon?: JSX.Element
  label?: string
  onClick: DOMAttributes<HTMLButtonElement>['onClick']
  color?: string
  active?: boolean
  disabled?: boolean
  reverse?: boolean
  loading?: boolean
}
export const FlatButton = ({
  color = palette.mediumBerryBlue,
  onClick,
  className,
  icon,
  label,
  active,
  disabled,
  reverse,
  loading
}: FlatButtonProps) => {
  const hasIcon = Boolean(icon || loading)

  return (
    <FlatButtonWrapper
      className={className}
      hasLabel={Boolean(label)}
      active={active}
      disabled={disabled}
      reverse={reverse}
      loading={loading}
    >
      <button onClick={disabled || loading ? undefined : onClick}>
        {hasIcon && (
          <IconWrapper>
            {loading ? <Loader inline color={color} size={24} /> : icon}
          </IconWrapper>
        )}
        {!hasIcon && <HSpace px={8} />}
        {label && (
          <LabelWrapper>
            <Body2 color={color}>{label}</Body2>
          </LabelWrapper>
        )}
        <HSpace px={8} />
      </button>
    </FlatButtonWrapper>
  )
}
