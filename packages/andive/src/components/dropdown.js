import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import * as palette from '../constants/palette'
import {Body1} from './typography'
import Select from './select'

const Dropdown = styled.div`
  width: ${props => (props.fullWidth ? '100%' : 'auto')};
  padding: 8px;
`

function DropdownComponent({
  placeholder,
  disabled,
  fullWidth,
  label,
  options,
  optionFormat,
  value,
  onChange,
  icon,
  inputRef,
  name,
  error,
  ...props
}) {
  const color = disabled && palette.darkGrey
  const selectProps = {
    label,
    placeholder,
    value,
    onChange,
    options,
    optionFormat,
    error,
    icon,
    name,
    inputRef
  }

  return (
    <Dropdown fullWidth={fullWidth} {...props}>
      <Body1 color={color}>{label}</Body1>
      {disabled ? <Body1 color={palette.darkGrey}>{value || '—'}</Body1> : <Select {...selectProps} />}
    </Dropdown>
  )
}

DropdownComponent.propTypes = {
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  ...Select.propTypes
}

export default DropdownComponent
