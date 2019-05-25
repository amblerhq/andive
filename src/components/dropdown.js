import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import {mediumGrey} from '../constants/palette'
import {Body2} from './typography'
import Select from './select'
import {baselineCss} from './baseline'

const Dropdown = styled.div`
  ${baselineCss}

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
  ...props
}) {
  const color = disabled && mediumGrey
  const selectProps = {
    label: placeholder,
    value,
    onChange,
    options,
    optionFormat,
    icon
  }

  return (
    <Dropdown fullWidth={fullWidth} {...props}>
      <Body2 color={color}>{label}</Body2>
      {disabled ? <Body2 color={mediumGrey}>—</Body2> : <Select {...selectProps} />}
    </Dropdown>
  )
}

DropdownComponent.propTypes = {
  placeholder: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  ...Select.propTypes
}

export default DropdownComponent
