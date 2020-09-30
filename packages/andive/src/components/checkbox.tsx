import React from 'react'
import styled, { css } from 'styled-components'

import CheckboxOnIcon from './icons/checkbox-on'
import CheckboxOffIcon from './icons/checkbox-off'
import RadioOnIcon from './icons/radio-on'
import RadioOffIcon from './icons/radio-off'
import { CheckboxGroupContext } from './checkbox-group'
import { Body1 } from './typography'
import * as palette from '../constants/palette'

const CheckboxRoot = styled.div<{ fullWidth?: boolean; disabled?: boolean }>`
  width: ${props => (props.fullWidth ? '100%' : 'auto')};
  padding: 8px;

  display: flex;
  align-items: center;

  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`

const Label = styled(Body1)<{ disabled?: boolean }>`
  padding-left: 12px;

  ${props =>
    props.disabled
      ? css`
          color: ${palette.mediumPrimary};
        `
      : undefined}
`

interface CheckboxProps {
  name?: string
  checked?: boolean
  className?: string
  label?: string
  onChange?: () => void
  disabled?: boolean
  fullWidth?: boolean
  radio?: boolean
}

export function Checkbox({
  className,
  label,
  checked,
  onChange,
  name,
  disabled,
  fullWidth,
  ...props
}: CheckboxProps) {
  const context: any /* FixType */ = React.useContext(CheckboxGroupContext)

  let radio = props.radio || false
  // This is a group of checkboxes controlled by a <CheckboxGroup />
  if (context) {
    if (!name) {
      throw new Error(
        `A checkbox controlled by a <CheckboxGroup /> must have a "name" prop.`
      )
    }

    onChange = () => {
      context.onChange(name)
    }
    checked = context.values[name]
    radio = context.radio
  }

  return (
    <CheckboxRoot
      className={className}
      fullWidth={fullWidth}
      onClick={disabled ? undefined : onChange}
      disabled={disabled}
    >
      {!checked && (
        <>
          {radio ? (
            <RadioOffIcon
              inline
              color={disabled ? palette.lightPrimary : undefined}
            />
          ) : (
            <CheckboxOffIcon
              inline
              color={disabled ? palette.lightPrimary : undefined}
            />
          )}
        </>
      )}

      {checked && (
        <>
          {radio ? (
            <RadioOnIcon
              inline
              color={disabled ? palette.lightPrimary : undefined}
            />
          ) : (
            <CheckboxOnIcon
              inline
              color={disabled ? palette.lightPrimary : undefined}
            />
          )}
        </>
      )}
      {label && <Label disabled={disabled}>{label}</Label>}
    </CheckboxRoot>
  )
}
