import React from 'react'
import styled, {css} from 'styled-components'
import PropTypes from 'prop-types'

import {body1Css, Body2} from './typography'
import CloseIcon from '../components/icons/close'
import {darkGrey, lightGrey, mediumGrey, berryBlue, error} from '../constants/palette'

const InputRoot = styled.div`
  width: ${props => (props.fullWidth ? '100%' : 'auto')};
  position: relative;
  padding: 8px;
`

const inputCss = ({error: error_, canClear, hasIcon, disabled}) => css`
  box-sizing: border-box;
  border: none;
  outline: none;

  width: 100%;
  height: 56px;
  border-radius: 16px;
  background-color: ${error_ ? `${error}44` : '#ededed'};
  color: ${error_ ? error : darkGrey}

  padding: 16px ${canClear ? 48 : 16}px 16px ${hasIcon ? '64px' : '16px'};

  caret-color: ${berryBlue};

  ${body1Css};

  ::placeholder {
    ${body1Css};
    color: ${mediumGrey};
  }

  border: 1px solid transparent;

  :focus {
    border: 1px solid ${mediumGrey};
    background-color: white;
  }

  ${disabled &&
    css`
      color: ${mediumGrey};
      background-color: ${lightGrey};
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

const Error = styled(Body2)`
  padding: 4px 8px 8px 8px;
  color: ${error};
`

const Icon = styled.div`
  position: absolute;

  left: 24px;
  top: 20px;
`

/** This input component is intended to be used the controlled way, by always - at least - passing (value, onChange).
 *  It also exposes 2 common input features:
 *  - An error message that is displayed when present.
 *  - An onClear handle called when the right hand-side <CloseIcon /> is clicked.
 */
const InputComponent = React.forwardRef(function InputComponent(
  {value, onChange, onClear, error: error_, fullWidth, icon, disabled, textarea, onBlur, ...props},
  ref
) {
  const canClear = !!(onChange && value && value.length > 0)
  const hasIcon = !!icon
  const TextField = textarea ? TextArea : Input
  const inputRef = React.useRef(null)
  const [skipNextBlur, setSkipNextBlur] = React.useState(false)

  const handleClear = React.useCallback(() => {
    if (onClear) {
      onClear()
    }

    if (inputRef.current) {
      inputRef.current.focus()
      setSkipNextBlur(true)
    }
  }, [onClear, inputRef.current])

  const handleBlur = React.useCallback(
    ev => {
      if (inputRef.current && skipNextBlur) {
        inputRef.current.focus()
        setSkipNextBlur(false)
      }

      if (onBlur) {
        onBlur(ev)
      }
    },
    [inputRef.current, skipNextBlur]
  )

  return (
    <InputRoot ref={ref} fullWidth={fullWidth}>
      <TextField
        onBlur={handleBlur}
        ref={inputRef}
        value={value}
        onChange={onChange}
        canClear={canClear}
        hasIcon={hasIcon}
        error={error_}
        disabled={disabled}
        {...props}
      />
      {hasIcon && <Icon>{icon}</Icon>}
      {canClear && !disabled && (
        <Close onMouseDown={handleClear}>
          <CloseIcon inline />
        </Close>
      )}
      {error_ && <Error>{error_}</Error>}
    </InputRoot>
  )
})

InputComponent.propTypes = {
  /** input value */
  value: PropTypes.string.isRequired,
  /** onChange handler */
  onChange: PropTypes.func.isRequired,
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
  /** must render a <textarea /> */
  textarea: PropTypes.bool,
  onBlur: PropTypes.func
}

export default InputComponent
