import React, {useContext} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import posed, {PoseGroup} from 'react-pose'

import CheckboxOnIcon from './icons/checkbox-on'
import CheckboxOffIcon from './icons/checkbox-off'
import RadioOnIcon from './icons/radio-on'
import RadioOffIcon from './icons/radio-off'
import {CheckboxGroupContext} from './checkbox-group'
import {Body1} from './typography'

const FadeInOut = posed.div({
  enter: {
    opacity: 1,
    transition: {
      duration: 150,
      type: 'tween',
      stifness: 0
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 150,
      type: 'tween',
      stifness: 0
    }
  }
})

const Checkbox = styled.div`
  width: ${props => (props.fullWidth ? '100%' : 'auto')};
  padding: 8px;

  display: flex;
  align-items: center;

  cursor: pointer;
`

const Label = styled(Body1)`
  padding-left: 12px;
`

function isNullable(value) {
  return value === undefined || value === null
}

function CheckboxComponent({label, checked, onChange, name, fullWidth, ...props}) {
  const context = useContext(CheckboxGroupContext)

  if (!context && (isNullable(checked) || isNullable(onChange))) {
    throw new Error(
      `A controlled checkbox needs the "checked" and "onChange" props.
      If you want to control a group of <Checkbox /> components, do not control them instead wrap
      them inside a <CheckboxGroup /> component.
      `
    )
  }

  let radio = false
  // This is a group of checkboxes controlled by a <CheckboxGroup />
  if (context) {
    if (!name) {
      throw new Error(`A checkbox controlled by a <CheckboxGroup /> must have a "name" prop.`)
    }

    onChange = () => {
      context.onChange(name)
    }
    checked = context.values[name]
    radio = context.radio
  }

  return (
    <Checkbox fullWidth={fullWidth} onClick={onChange} checked={checked} {...props}>
      <PoseGroup>
        {!checked && <FadeInOut key="off">{radio ? <RadioOffIcon inline /> : <CheckboxOffIcon inline />}</FadeInOut>}
        {!!checked && <FadeInOut key="on">{radio ? <RadioOnIcon inline /> : <CheckboxOnIcon inline />}</FadeInOut>}
      </PoseGroup>
      {label ? <Label>{label}</Label> : null}
    </Checkbox>
  )
}

CheckboxComponent.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  name: PropTypes.string,
  fullWidth: PropTypes.bool,
  radio: PropTypes.bool
}

export default CheckboxComponent
