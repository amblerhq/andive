import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import {berryBlue} from '../constants/palette'
import {body1Css} from './typography'

const Select = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;
  position: relative;
`

const SelectTag = styled.select`
  cursor: pointer;
  -webkit-appearance: none;

  display: block;
  outline: 0;
  border: 0;
  border-radius: 0;
  margin: 0;
  margin-right: ${props => (props.hasIcon ? '16px' : '0px')};

  background: transparent;

  ${body1Css}
  color: ${berryBlue};
`

const iconStyle = {
  pointerEvents: 'none',
  position: 'absolute',
  top: 'calc(50% - 8px)',
  right: 0
}

function SelectComponent({label, options, optionFormat, value, onChange, icon, ...props}) {
  const hasIcon = !!icon

  return (
    <Select {...props}>
      <SelectTag value={value} onChange={onChange} hasIcon={hasIcon}>
        <option value="" disabled>
          {label}
        </option>
        {options.map((option, index) => (
          <option key={option} name={option} value={option}>
            {optionFormat ? optionFormat(option, index) : option}
          </option>
        ))}
      </SelectTag>
      {hasIcon && React.cloneElement(icon, {style: iconStyle})}
    </Select>
  )
}

SelectComponent.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
  optionFormat: PropTypes.func,
  icon: PropTypes.node,
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default SelectComponent
