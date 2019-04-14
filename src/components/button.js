import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import {baselineCss} from './baseline'
import {white, lightBeetrootPurple} from '../constants/palette'
import {ButtonTextPrimary, ButtonTextSecondary} from './typography'

function backgroundColor({primary, invert}) {
  if (primary) {
    return invert ? white : lightBeetrootPurple
  }

  return invert ? lightBeetrootPurple : white
}

function borderColor({primary, invert}) {
  if (primary) {
    return invert ? white : lightBeetrootPurple
  }

  return invert ? white : lightBeetrootPurple
}

const ButtonComponent = styled.button`
  ${baselineCss}

  outline: none;
  border: 1px solid ${borderColor};

  background-color: ${backgroundColor};

  min-width: 182px;
  height: 56px;

  border-radius: 28px;
  box-shadow: 0 2px 5px 0 rgba(5, 71, 82, 0.2);

  cursor: pointer;

  padding: 16px 24px;

  display: flex;
  justify-content: center;
  align-items: center;
`

export default function Button({label, icon, onClick, primary, invert, ...props}) {
  const ButtonText = primary ? ButtonTextPrimary : ButtonTextSecondary

  const textStyleOverride = {}

  if (invert) {
    textStyleOverride.color = primary ? lightBeetrootPurple : white
  }

  if (icon) {
    textStyleOverride.paddingLeft = 8
    textStyleOverride.display = 'flex'
    textStyleOverride.alignItems = 'center'
  }

  return (
    <ButtonComponent onClick={onClick} primary={primary} invert={invert} {...props}>
      {icon}
      <ButtonText style={textStyleOverride}>{label}</ButtonText>
    </ButtonComponent>
  )
}

Button.propTypes = {
  /** Set the button text. Can be another react component (ex: LabelIcon) */
  label: PropTypes.string.isRequired,
  icon: PropTypes.node,
  onClick: PropTypes.func,
  /** Set the button in "Call to action" mode */
  primary: PropTypes.bool,
  /** Inverse button colors to display on beetrootPurple background */
  invert: PropTypes.bool
}
