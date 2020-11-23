import React, {InputHTMLAttributes} from 'react'
import styled, {css} from 'styled-components'

import {body1Css, body2Css, Body3, Body2} from './typography'
import CloseIcon from './icons/close'
import * as palette from '../constants/palette'
import Box from './box'

const InputRoot = styled.div<{fullWidth?: boolean}>`
  position: relative;
  width: 100%;
`

type InputState = 'EMPTY' | 'DISABLED' | 'ERRORED' | 'FILLED' | 'ACTIVE'

type GetColorProps = {
  state: InputState
}
const getColor = ({state}: GetColorProps) => {
  switch (state) {
    case 'ACTIVE':
      return css`
        background-color: white;
        color: ${palette.mainText};
        border: 1px solid ${palette.darkPrimary};
        caret-color: ${palette.mediumBerryBlue};
      `
    case 'FILLED':
      return css`
        background-color: white;
        border: 1px solid #dddddd;
        color: ${palette.mainText};
      `
    case 'ERRORED':
      return css`
        background-color: white;
        border: 1px solid ${palette.error};
        color: ${palette.mainText};
      `
    case 'DISABLED':
      return css`
        background-color: #dddddd;
        color: ${palette.secondaryText};
      `
    case 'EMPTY':
      return css`
        background-color: ${palette.mediumGrey};
        ::placeholder {
          color: ${palette.secondaryText};
        }
      `
  }
}

type GetPlaceholderCssProps = {
  small: boolean
}
function getPlaceholderCss({small}: GetPlaceholderCssProps) {
  if (small) {
    return css`
      ${body2Css}
      color: ${palette.secondaryText};
    `
  }

  return css`
    ${body1Css}
    color: ${palette.secondaryText};
  `
}

type GetSizesProps = {
  small: boolean
}
function getSizes({small}: GetSizesProps) {
  if (small) {
    return css`
      width: 100%;
      height: 40px;

      ${body2Css}
    `
  }

  return css`
    width: 100%;
    height: 56px;

    ${body1Css}
  `
}

type GetSpacesProps = {
  small: boolean
  hasRightIcon: boolean
  hasLeftIcon: boolean
}
function getSpaces({small, hasRightIcon, hasLeftIcon}: GetSpacesProps) {
  if (small) {
    return css`
      padding: 8px ${hasRightIcon ? 48 : 16}px 8px ${hasLeftIcon ? 64 : 16}px;
    `
  }

  return css`
    padding: 16px ${hasRightIcon ? 48 : 16}px 16px ${hasLeftIcon ? 64 : 16}px;
  `
}

type FieldProps = GetColorProps & GetSizesProps & GetSpacesProps & GetPlaceholderCssProps & {as: 'textarea' | 'input'}
const Field = styled.input<FieldProps>`
  /* Base */
  box-sizing: border-box;
  border: 1px solid transparent;
  border-radius: 16px;
  outline: none;

  ${getColor}
  ${getSizes}
  ${getSpaces}

  ::placeholder {
    ${getPlaceholderCss}
  }

  ${props =>
    props.as === 'textarea' &&
    css`
      resize: none;
    `}
`
const FieldLabel = styled.label`
  display: block;
  padding-bottom: 8px;
`

type GetCloseIconPositionProps = {
  small: boolean
  hasLabel: boolean
}
function getCloseIconPosition({small, hasLabel}: GetCloseIconPositionProps) {
  let top = 24
  if (small) {
    top = 16
  }

  if (hasLabel) {
    const body2Height = 24
    const verticalSpacing = 8
    top += body2Height + verticalSpacing
  }

  return css`
    position: absolute;
    left: calc(100% - 40px);
    top: ${top}px;
  `
}

const Close = styled.div<GetCloseIconPositionProps>`
  ${getCloseIconPosition};
  cursor: pointer;
`

const Error = styled(Body3)`
  padding: 8px 16px;
  color: ${palette.darkRadishRed};
  background-color: ${palette.lightRadishRed};
  border-radius: 4px;

  & a {
    text-decoration: underline;
    color: ${palette.darkRadishRed};
  }
`

const Icon = styled.div<{small: boolean}>`
  position: absolute;

  left: 24px;
  top: ${props => (props.small ? 12 : 20)}px;
`

const FlexBox = styled(Box)`
  display: flex;
`

// InputHTMLAttributes defines value, onChange, name, autoComplete, placeholder, and more.
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onClear?: () => void
  error?: React.ReactNode
  icon?: React.ReactNode
  textarea?: boolean
  small?: boolean
  mandatory?: boolean
  label?: string
  inputRef?: React.MutableRefObject<HTMLInputElement | null>
}
export function Input({
  value,
  onChange,
  onClear,
  error,
  icon,
  label,
  textarea = false,
  small = false,
  mandatory = false,
  inputRef,
  ...props
}: InputProps) {
  const [focus, setFocus] = React.useState(false)

  const innerInputRef = React.useRef<HTMLInputElement | null>(null)
  const callbackRef = React.useCallback(
    el => {
      innerInputRef.current = el
      if (inputRef) {
        inputRef.current = el
      }
    },
    [innerInputRef.current, inputRef]
  )

  let state: InputState = !value ? 'EMPTY' : 'FILLED'
  if (error) {
    state = 'ERRORED'
  }
  if (focus) {
    state = 'ACTIVE'
  }
  if (props.disabled) {
    state = 'DISABLED'
  }

  const handleClear = () => {
    if (state === 'DISABLED') {
      return
    }

    if (onClear) {
      onClear()
    }

    if (innerInputRef.current) {
      innerInputRef.current.focus()
    }
  }

  const handleFocus = (ev: React.FocusEvent<HTMLInputElement>) => {
    setFocus(true)
    if (props.onFocus) {
      props.onFocus(ev)
    }
  }

  const handleBlur = (ev: React.FocusEvent<HTMLInputElement>) => {
    setFocus(false)

    if (props.onBlur) {
      props.onBlur(ev)
    }
  }

  const hasIcon = Boolean(icon)
  const hasClear = Boolean(onClear && value)

  const id = label ? label.toLowerCase().replace(/ /g, '-') : undefined

  return (
    <>
      <InputRoot>
        <Box>
          {label && (
            <FieldLabel htmlFor={id}>
              <Body2 color={palette.secondaryText}>
                {label}
                {mandatory && (
                  <Body2 as="span" color={palette.error}>
                    *
                  </Body2>
                )}
              </Body2>
            </FieldLabel>
          )}
          <Field
            ref={callbackRef}
            {...props}
            id={id}
            value={value}
            onChange={onChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            /* Extra props for styling */
            as={textarea ? 'textarea' : 'input'}
            state={state}
            small={small}
            hasLeftIcon={hasIcon}
            hasRightIcon={hasClear}
            autoComplete="ambler"
          />
          {hasIcon && <Icon small={small}>{icon}</Icon>}
          {hasClear && !props.disabled && (
            <Close small={small} hasLabel={Boolean(label)} onClick={handleClear}>
              <CloseIcon inline />
            </Close>
          )}
        </Box>
        {error && (
          <FlexBox>
            <Error>{error}</Error>
          </FlexBox>
        )}
      </InputRoot>
    </>
  )
}
