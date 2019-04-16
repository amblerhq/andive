import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {Body2, Body3} from './typography'

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
  const ItemText = disabled ? Body3 : Body2
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
      <ItemText>{label}</ItemText>
      {disabled ? <Body3>—</Body3> : <Select {...selectProps} />}
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
