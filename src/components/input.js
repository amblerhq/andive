import React from 'react'
import styled, {css} from 'styled-components'
import PropTypes from 'prop-types'

import {body1Css, body2Css, Body2} from './typography'
import CloseIcon from './icons/close'
import Loader from './loader'
import * as palette from '../constants/palette'

const InputRoot = styled.div`
  width: ${props => (props.fullWidth ? '100%' : 'auto')};
  position: relative;
  padding: 8px;
`

const inputCss = ({error: error_, canClear, hasIcon, disabled, small}) => css`
  box-sizing: border-box;
  border: none;
  outline: none;

  width: 100%;
  height: ${small ? 40 : 56}px;
  border-radius: 16px;
  background-color: ${error_ ? palette.hexToRGBA(palette.error, 0.6) : '#ededed'};
  color: ${error_ ? palette.error : palette.darkPrimary}

  padding: ${small ? 8 : 16}px ${canClear ? 48 : 16}px ${small ? 8 : 16}px ${hasIcon ? '64px' : '16px'};

  caret-color: ${palette.mediumBerryBlue};

  ${small ? body2Css : body1Css};

  ::placeholder {
    ${small ? body2Css : body1Css};
    color: ${palette.mediumPrimary};
  }

  border: 1px solid transparent;

  :focus {
    border: 1px solid ${palette.darkPrimary};
    background-color: white;
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
  top: ${p => (p.small ? 16 : 24)}px;

  cursor: pointer;
`

const Loading = styled.div`
  position: absolute;
  left: calc(100% - 50px);
  top: ${p => (p.small ? 12 : 20)}px;

  cursor: loading;
`

const Error = styled(Body2)`
  padding: 4px 8px 8px 8px;
  color: ${palette.error};
`

const Icon = styled.div`
  position: absolute;

  left: 24px;
  top: ${p => (p.small ? 12 : 20)}px;
`

/** This input component is intended to be used the controlled way, by always - at least - passing (value, onChange).
 *  It also exposes 2 common input features:
 *  - An error message that is displayed when present.
 *  - An onClear handle called when the right hand-side <CloseIcon /> is clicked.
 */
const InputComponent = React.forwardRef(function InputComponent(
  {value, onChange, onClear, error: error_, fullWidth, icon, disabled, loading, textarea, onBlur, small, ...props},
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
      if (skipNextBlur) {
        if (inputRef.current) {
          inputRef.current.focus()
          setSkipNextBlur(false)
        }
      } else {
        if (onBlur) {
          onBlur(ev)
        }
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
        small={small}
        {...props}
      />
      {hasIcon && <Icon small={small}>{icon}</Icon>}
      {canClear && !disabled && !loading && (
        <Close small={small} onMouseDown={handleClear}>
          <CloseIcon inline />
        </Close>
      )}
      {loading && (
        <Loading small={small}>
          <Loader inline color={palette.darkGrey} />
        </Loading>
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
  /** render a loader next to the text field */
  loading: PropTypes.bool,
  /** must render a <textarea /> */
  textarea: PropTypes.bool,
  small: PropTypes.bool,
  onBlur: PropTypes.func
}

export default InputComponent
