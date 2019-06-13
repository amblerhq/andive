import React from 'react'
import styled, {css} from 'styled-components'
import PropTypes from 'prop-types'

import {baselineCss} from './baseline'
import {
  white,
  lightBeetrootPurple,
  lightBeetrootPurpleAlpha,
  berryBlue,
  lightGreyAlpha,
  lightGrey
} from '../constants/palette'
import {ButtonTextPrimary, ButtonTextSecondary, ActionText} from './typography'
import Loader from './loader'

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

  ${props =>
    props.disabled &&
    css`
      background-color: ${({invert}) => (invert ? lightBeetrootPurple : lightGrey)};
      border: 1px solid ${({invert}) => (invert ? lightGreyAlpha(0.5) : lightBeetrootPurpleAlpha(0.5))};
      cursor: not-allowed;
      box-shadow: none;
    `}

  ${props =>
    props.loading &&
    css`
      padding: 0;
      min-width: 56px;
      cursor: progress;
    `}
`

const PrimaryButton = styled(ResetButton)`
  border: 1px solid ${lightBeetrootPurple};
  background-color: ${({invert}) => (invert ? white : lightBeetrootPurple)};
  color: ${({invert}) => (invert ? lightBeetrootPurple : white)};
  height: 56px;
  border-radius: 28px;
  box-shadow: 0 2px 5px 0 rgba(5, 71, 82, 0.2);

  padding: 16px 24px;

  ${props =>
    props.disabled &&
    css`
      background: ${({invert}) => (invert ? lightGreyAlpha(0.5) : lightBeetrootPurpleAlpha(0.5))};
      border: 1px solid ${({invert}) => (invert ? lightGreyAlpha(0.5) : lightBeetrootPurpleAlpha(0.5))};
      cursor: not-allowed;
      box-shadow: none;
    `}

  ${props =>
    props.loading &&
    css`
      padding: 0;
      min-width: 56px;
      cursor: progress;
    `}
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

  ${props =>
    props.loading &&
    css`
      cursor: progress;
    `}
`

const FlatButton = styled(ResetButton)`
  color: ${({invert}) => (invert ? white : berryBlue)};

  ${props =>
    props.disabled &&
    css`
      cursor: not-allowed;
    `}

  ${props =>
    props.loading &&
    css`
      cursor: progress;
    `}
`

function textStyle(leftIcon, rightIcon, variant, invert, color) {
  return {
    paddingRight: rightIcon && 8,
    paddingLeft: leftIcon && 8,
    color
  }
}

const Button = React.forwardRef(function Button(
  {label, rightIcon, leftIcon, onClick, variant, invert, textColor, href, disabled, loading, ...props},
  ref
) {
  if (href && variant !== 'link') {
    throw new Error('Button variant "link" cannot be used without "href"')
  }

  const ButtonComponent = React.useMemo(() => {
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
  }, [variant])

  const ButtonLabel = React.useMemo(() => {
    switch (variant) {
      case 'primary':
        return ButtonTextPrimary
      case 'flat':
      case 'link':
        return ActionText
      default:
        return ButtonTextSecondary
    }
  }, [variant])

  const color = React.useMemo(() => {
    if (disabled) {
      switch (variant) {
        case 'primary':
          return invert ? lightBeetrootPurpleAlpha(0.5) : lightGrey
        case 'flat':
        case 'link':
          return invert ? lightGreyAlpha(0.5) : lightBeetrootPurpleAlpha(0.5)
        default:
          return invert ? lightGreyAlpha(0.5) : lightBeetrootPurpleAlpha(0.5)
      }
    }

    if (textColor) {
      return textColor
    }

    if (invert) {
      switch (variant) {
        case 'primary':
          return lightBeetrootPurple
        case 'flat':
          return white
        default:
          return white
      }
    }
  }, [variant, disabled, invert, textColor])

  const iconStyle = {}

  if (disabled) {
    iconStyle.color = color
  }

  const loaderColor = React.useMemo(() => {
    if (!loading) {
      return
    }

    switch (variant) {
      case 'primary':
        return invert ? lightBeetrootPurple : white
      case 'flat':
      case 'link':
        return invert ? white : berryBlue
      default:
        return invert ? white : lightBeetrootPurple
    }
  }, [variant, loading, invert])

  return (
    <ButtonComponent
      ref={ref}
      onClick={!href && !disabled && !loading ? onClick : undefined}
      href={!disabled && !loading ? href : undefined}
      type="button"
      primary={variant === 'primary'}
      invert={invert}
      disabled={disabled}
      loading={loading}
      {...props}
    >
      {loading ? (
        <Loader inline color={loaderColor} />
      ) : (
        <>
          {leftIcon && React.cloneElement(leftIcon, iconStyle)}
          <ButtonLabel style={textStyle(leftIcon, rightIcon, variant, invert, color)}>{label}</ButtonLabel>
          {rightIcon && React.cloneElement(rightIcon, iconStyle)}
        </>
      )}
    </ButtonComponent>
  )
})

Button.propTypes = {
  label: PropTypes.string,
  rightIcon: PropTypes.node,
  leftIcon: PropTypes.node,
  onClick: PropTypes.func,
  href: PropTypes.string,
  /** Change the button look to "primary", "flat", "link" or undefined (defautlt) */
  variant: PropTypes.oneOf(['primary', 'flat', 'link']),
  /** Inverse button colors to display on beetrootPurple background */
  invert: PropTypes.bool,
  textColor: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool
}

export default Button
