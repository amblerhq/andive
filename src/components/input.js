import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import {body1Css, body3Css} from './typography'
import CloseIcon from '../components/icons/close'
import {darkGrey, mediumGrey, berryBlue, error} from '../constants/palette'

const InputRoot = styled.div`
  width: ${props => (props.fullWidth ? '100%' : 'auto')};
  position: relative;
`

const Input = styled.input`
  box-sizing: border-box;
  border: none;
  outline: none;

  width: 100%;
  height: 56px;
  border-radius: 16px;
  background-color: ${props => (props.error ? `${error}44` : '#ededed')};
  color: ${props => (props.error ? error : darkGrey)}

  padding: 16px ${props => (props.canClear ? 48 : 16)}px 16px ${props => (props.hasIcon ? '64px' : '16px')};

  caret-color: ${berryBlue};

  ${body1Css};

  ::placeholder {
    ${body3Css};
  }

  border: 1px solid transparent;

  :focus {
    border: 1px solid ${mediumGrey};
    background-color: white;
  }
`

const Close = styled.div`
  position: absolute;
  left: calc(100% - 32px);
  top: 16px;

  cursor: pointer;
`

const Error = styled.div`
  padding: 8px;
  color: ${error};
  min-height: 24px;
`

const Icon = styled.div`
  position: absolute;

  left: 16px;
  top: 12px;
`

/** This input component is intended to be used the controlled way, by always - at least - passing (value, onChange).
 *  It also exposes 2 common input features:
 *  - An error message that is displayed when present.
 *  - An onClear handle called when the right hand-side <CloseIcon /> is clicked.
 */
export default function InputComponent({value, onChange, onClear, error, fullWidth, icon, ...props}) {
  const canClear = !!(onChange && value && value.length > 0)
  const hasIcon = !!icon

  return (
    <InputRoot fullWidth={fullWidth}>
      <Input value={value} onChange={onChange} canClear={canClear} hasIcon={hasIcon} error={error} {...props} />
      {hasIcon && <Icon>{icon}</Icon>}
      {canClear && (
        <Close onClick={onClear}>
          <CloseIcon inline />
        </Close>
      )}
      {error && <Error>{error}</Error>}
    </InputRoot>
  )
}

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
  icon: PropTypes.node
}
