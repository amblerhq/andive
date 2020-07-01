import React from 'react'
import styled, {css} from 'styled-components'
import PropTypes from 'prop-types'

import {body1Css, Body3} from './typography'
import CloseIcon from './icons/close'
import Loader from './loader'
import * as palette from '../constants/palette'
import Box from './box'

const InputRoot = styled.div`
  position: relative;

  width: ${props => (props.fullWidth ? '100%' : 'auto')};
`

const inputCss = ({error: error_, canClear, hasIcon, disabled}) => css`
  box-sizing: border-box;
  border: none;
  outline: none;

  width: 100%;
  height: 56px;
  border-radius: 16px;
  background-color: #ededed;
  color: ${palette.darkPrimary}

  padding: 16px ${canClear ? 48 : 16}px 16px ${hasIcon ? '64px' : '16px'};

  caret-color: ${palette.mediumBerryBlue};

  ${body1Css};

  ::placeholder {
    ${body1Css};
    color: ${palette.mediumPrimary};
  }

  ${
    error_
      ? css`
          border: 1px solid ${palette.error};
        `
      : css`
          border: 1px solid transparent;

          :focus {
            border: 1px solid ${palette.darkPrimary};
            background-color: white;
          }
        `
  }

  ${disabled &&
    css`
      color: ${palette.mediumPrimary};
      background-color: ${palette.darkGrey};
    `}
`

const Input = styled.input`
  ${inputCss}
`

const TextArea = styled.textarea`
  ${inputCss}
  resize: none;
`

const Close = styled.div`
  position: absolute;
  left: calc(100% - 40px);
  top: 24px;

  cursor: pointer;
`

const Loading = styled.div`
  position: absolute;
  left: calc(100% - 50px);
  top: 20px;

  cursor: loading;
`

const Error = styled(Body3)`
  padding: 8px 16px;
  color: ${palette.darkRadishRed};
  background-color: ${palette.lightRadishRed};
  border-radius: 4px;
`

const Icon = styled.div`
  position: absolute;

  left: 24px;
  top: 20px;
`

const FlexBox = styled(Box)`
  display: flex;
`

/** This input component is intended to be used the controlled way, by always - at least - passing (value, onChange).
 *  It also exposes 2 common input features:
 *  - An error message that is displayed when present.
 *  - An onClear handle called when the right hand-side <CloseIcon /> is clicked.
 */
const InputComponent = React.forwardRef(function InputComponent(
  {value, onChange, onClear, error: error_, inputRef, fullWidth, icon, disabled, loading, textarea, onBlur, ...props},
  ref
) {
  const canClear = Boolean(onChange && value && value.length > 0)
  const hasIcon = Boolean(icon)
  const TextField = textarea ? TextArea : Input
  const innerInputRef = React.useRef(null)
  const [skipNextBlur, setSkipNextBlur] = React.useState(false)

  const handleClear = React.useCallback(() => {
    if (onClear) {
      onClear()
    }

    if (innerInputRef.current) {
      innerInputRef.current.focus()
      setSkipNextBlur(true)
    }
  }, [onClear, innerInputRef.current])

  const handleBlur = React.useCallback(
    ev => {
      if (skipNextBlur) {
        if (innerInputRef.current) {
          innerInputRef.current.focus()
          setSkipNextBlur(false)
        }
      } else {
        if (onBlur) {
          onBlur(ev)
        }
      }
    },
    [innerInputRef.current, skipNextBlur]
  )

  return (
    <>
      <InputRoot ref={ref} fullWidth={fullWidth}>
        <Box>
          <TextField
            onBlur={handleBlur}
            ref={el => {
              innerInputRef.current = el
              if (inputRef) {
                inputRef(el)
              }
            }}
            value={value}
            onChange={onChange}
            canClear={canClear}
            hasIcon={hasIcon}
            error={error_}
            disabled={disabled}
            {...props}
          />
          {hasIcon && <Icon>{icon}</Icon>}
          {canClear && !disabled && !loading && (
            <Close onMouseDown={handleClear}>
              <CloseIcon inline />
            </Close>
          )}
          {loading && (
            <Loading>
              <Loader inline color={palette.darkGrey} />
            </Loading>
          )}
        </Box>
        {error_ && (
          <FlexBox>
            <Error>{error_}</Error>
          </FlexBox>
        )}
      </InputRoot>
    </>
  )
})

InputComponent.propTypes = {
  /** input value */
  value: PropTypes.string,
  /** onChange handler */
  onChange: PropTypes.func,
  /** onClear handler */
  onClear: PropTypes.func,
  /** error message */
  error: PropTypes.string,
  /** should fill the parent width */
  fullWidth: PropTypes.bool,
  /** render left icon */
  icon: PropTypes.node,
  /** disable the text field */
  disabled: PropTypes.bool,
  /** render a loader next to the text field */
  loading: PropTypes.bool,
  /** must render a <textarea /> */
  textarea: PropTypes.bool,
  onBlur: PropTypes.func,
  inputRef: PropTypes.any
}

export default InputComponent
