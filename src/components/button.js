import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import {baselineCss} from './baseline'
import {white, lightBeetrootPurple, berryBlue} from '../constants/palette'
import {ButtonTextPrimary, ButtonTextSecondary, ActionText} from './typography'

const ResetButton = styled.button`
  ${baselineCss}

  outline: none;
  cursor: pointer;
  border: none;
  background: none;

  padding: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
`

const DefaultButton = styled(ResetButton)`
  border: 1px solid ${({invert}) => (invert ? white : lightBeetrootPurple)};
  background-color: ${({invert}) => (invert ? lightBeetrootPurple : white)};
  color: ${({invert}) => (invert ? white : lightBeetrootPurple)};
  height: 56px;
  border-radius: 28px;
  box-shadow: 0 2px 5px 0 rgba(5, 71, 82, 0.2);

  padding: 16px 24px;
`

const PrimaryButton = styled(ResetButton)`
  border: 1px solid ${lightBeetrootPurple};
  background-color: ${({invert}) => (invert ? white : lightBeetrootPurple)};
  color: ${({invert}) => (invert ? lightBeetrootPurple : white)};
  height: 56px;
  border-radius: 28px;
  box-shadow: 0 2px 5px 0 rgba(5, 71, 82, 0.2);

  padding: 16px 24px;
`

const LinkButton = styled.a`
  outline: none;
  cursor: pointer;
  border: none;
  background: none;
  text-decoration: none;

  padding: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({invert}) => (invert ? white : berryBlue)};
`

const FlatButton = styled(ResetButton)`
  color: ${({invert}) => (invert ? white : berryBlue)};
`

function textStyle(leftIcon, rightIcon, variant, invert, textColor) {
  return {
    paddingRight: rightIcon && 8,
    paddingLeft: leftIcon && 8,
    color: textColor
      ? textColor
      : invert &&
        (() => {
          switch (variant) {
            case 'primary':
              return lightBeetrootPurple
            case 'flat':
              return white
            default:
              return white
          }
        })()
  }
}

export default function Button({label, rightIcon, leftIcon, onClick, variant, invert, textColor, href, ...props}) {
  if ((variant === 'link' && !href) || (href && variant !== 'link')) {
    throw new Error('Button variant "link" cannot be used without "href"')
  }

  const ButtonComponent = (() => {
    switch (variant) {
      case 'primary':
        return PrimaryButton
      case 'flat':
        return FlatButton
      case 'link':
        return LinkButton
      default:
        return DefaultButton
    }
  })()

  const ButtonLabel = (() => {
    switch (variant) {
      case 'primary':
        return ButtonTextPrimary
      case 'flat':
      case 'link':
        return ActionText
      default:
        return ButtonTextSecondary
    }
  })()

  return (
    <ButtonComponent
      onClick={!href ? onClick : undefined}
      href={href}
      primary={variant === 'primary'}
      invert={invert}
      {...props}
    >
      {leftIcon}
      <ButtonLabel style={textStyle(leftIcon, rightIcon, variant, invert, textColor)}>{label}</ButtonLabel>
      {rightIcon}
    </ButtonComponent>
  )
}

Button.propTypes = {
  /** Set the button text. Can be another react component (ex: LabelIcon) */
  label: PropTypes.string.isRequired,
  rightIcon: PropTypes.node,
  leftIcon: PropTypes.node,
  onClick: PropTypes.func,
  href: PropTypes.string,
  /** Change the button look to "primary", "flat", "link" or undefined (defautlt) */
  variant: PropTypes.oneOf(['primary', 'flat', 'link']),
  /** Inverse button colors to display on beetrootPurple background */
  invert: PropTypes.bool,
  textColor: PropTypes.string
}
