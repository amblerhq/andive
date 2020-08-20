import React from 'react'
import styled from 'styled-components'
import posed, {PoseGroup} from 'react-pose'

import CheckboxOnIcon from '../icons/checkbox-on'
import CheckboxOffIcon from '../icons/checkbox-off'
import RadioOnIcon from '../icons/radio-on'
import RadioOffIcon from '../icons/radio-off'

import {Body1, Body2} from '../typography'
import * as palette from '../../constants/palette'

const FadeInOut = posed.div({
  enter: {
    opacity: 1,
    transition: {
      duration: 150,
      type: 'tween',
      stifness: 0
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 150,
      type: 'tween',
      stifness: 0
    }
  }
})

const NativeInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`

const NativeCheckboxRoot = styled.label`
  display: inline-flex;
  position: relative;
  cursor: pointer;
  user-select: none;

  padding: 8px;

  :hover {
    background: ${props => props.theme.hover.backgroundColor};
    border-radius: ${props => props.theme.hover.borderRadius}px;
  }
`

const Label = styled(Body1)`
  padding-left: 4px;
`

const Error = styled(Body2)`
  padding: 2px 8px 8px 8px;
  color: ${palette.error};
`

interface NativeCheckboxProps {
  name?: string
  label?: string
  checked?: boolean
  error?: string
  radio?: boolean
  disabled?: boolean
  inputRef?: React.Ref<HTMLInputElement>,
  onChange?: (ev: React.ChangeEvent<HTMLInputElement>) => void
}
export function NativeCheckbox({label, name, checked, error, radio, disabled, inputRef, onChange, ...props}: NativeCheckboxProps) {
  return (
    <div>
      <NativeCheckboxRoot>
        <NativeInput
          name={name}
          type="checkbox"
          ref={inputRef}
          checked={checked}
          onChange={ev => {
            if (onChange) {
              onChange(ev)
            }
          }}
          {...props}
        />
        <PoseGroup>
          {!checked && (
            <FadeInOut key="off">
              {radio ? (
                <RadioOffIcon inline color={disabled ? palette.lightPrimary : undefined} />
              ) : (
                <CheckboxOffIcon inline color={disabled ? palette.lightPrimary : undefined} />
              )}
            </FadeInOut>
          )}
          {!!checked && (
            <FadeInOut key="on">
              {radio ? (
                <RadioOnIcon inline color={disabled ? palette.lightPrimary : undefined} />
              ) : (
                <CheckboxOnIcon inline color={disabled ? palette.lightPrimary : undefined} />
              )}
            </FadeInOut>
          )}
        </PoseGroup>
        <Label>{label}</Label>
      </NativeCheckboxRoot>
      {error ? <Error>{error}</Error> : null}
    </div>
  )
}
