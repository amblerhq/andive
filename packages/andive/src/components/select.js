import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import * as palette from '../constants/palette'
import {body1Css, Body2} from './typography'

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
  width: 100%;

  /*
    Fight off Firefox default indent. The @-moz-document beeing only implemented by
    the Gecko CSS engine (firefox one) it will be ignored by other browsers.
  */
  @-moz-document url-prefix() {
    text-indent: -2px;
  }

  background: transparent;

  ${body1Css}
  color: ${palette.mediumBerryBlue};
`

const Error = styled(Body2)`
  color: ${palette.error};
  padding-top: 4px;
`

const iconStyle = {
  pointerEvents: 'none',
  position: 'absolute',
  top: 'calc(50% - 8px)',
  right: 0,
  width: 16
}

function SelectComponent({
  label,
  placeholder,
  options,
  optionFormat,
  value,
  onChange,
  icon,
  error,
  name,
  inputRef,
  ...props
}) {
  const hasIcon = !!icon

  return (
    <div {...props}>
      <Select>
        <SelectTag ref={inputRef} name={name} value={value} onChange={onChange} style={{marginRight: hasIcon ? 16 : 0}}>
          <option value={options.includes('') ? '__andive_label' : ''} disabled>
            {label}
          </option>
          {options.includes('') ? <option value="">{placeholder}</option> : null}
          {options.filter(Boolean).map((option, index) => (
            <option key={option} name={option} value={option}>
              {optionFormat ? optionFormat(option, index) : option}
            </option>
          ))}
        </SelectTag>
        {hasIcon && React.cloneElement(icon, {style: iconStyle})}
      </Select>
      {error && <Error>{error}</Error>}
    </div>
  )
}

SelectComponent.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  optionFormat: PropTypes.func,
  icon: PropTypes.node,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string
}

export default SelectComponent
