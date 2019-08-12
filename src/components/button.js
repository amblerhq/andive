import React from 'react'
import styled, {css} from 'styled-components'
import PropTypes from 'prop-types'

import {
  white,
  lightBeetrootPurple,
  lightBeetrootPurpleAlpha,
  berryBlue,
  lightGreyAlpha,
  lightGrey,
  darkGrey
} from '../constants/palette'
import {Body2, ActionText, body1Css, body3Css} from './typography'
import Loader from './loader'

const ResetButton = styled.button`
  outline: none;
  cursor: pointer;
  border: none;
  background: none;

  padding: ${props => props.theme.padding}px;

  display: flex;
  justify-content: center;
  align-items: center;
`

const DefaultButtonText = styled(Body2)`
  text-transform: uppercase;
  font-size: ${props => (props.mobile ? 14 : 16)}px;
`

// * Default/secondary variant

function defaultColor({disabled, invert}) {
  if (disabled) {
    return invert ? lightGreyAlpha(0.5) : lightBeetrootPurpleAlpha(0.5)
  }

  return invert ? white : lightBeetrootPurple
}

const DefaultButton = styled(ResetButton)`
  border: 1px solid ${({invert}) => (invert ? white : lightBeetrootPurple)};
  background-color: ${({invert, backgroundColor}) => backgroundColor || (invert ? lightBeetrootPurple : white)};
  color: ${props => props.color};
  height: ${props => (props.mobile ? 40 : 56)}px;
  border-radius: 28px;
  box-shadow: 0 2px 5px 0 rgba(5, 71, 82, 0.2);

  padding: ${props => (props.mobile ? '8px 16px' : '16px 24px')};

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
      min-width: ${props => (props.mobile ? 40 : 56)}px;
      cursor: progress;
    `}
`

// * Primary/main variant

function primaryColor({disabled, invert}) {
  if (disabled) {
    return invert ? lightBeetrootPurpleAlpha(0.5) : lightGrey
  }
  return invert ? lightBeetrootPurple : white
}

const PrimaryButton = styled(DefaultButton)`
  border: 1px solid ${lightBeetrootPurple};
  background-color: ${({invert, backgroundColor}) => backgroundColor || (invert ? white : lightBeetrootPurple)};
  color: ${props => props.color};
  border-radius: 28px;
  box-shadow: 0 2px 5px 0 rgba(5, 71, 82, 0.2);

  ${props =>
    props.disabled &&
    css`
      background: ${({invert}) => (invert ? lightGreyAlpha(0.5) : lightBeetrootPurpleAlpha(0.5))};
      border: 1px solid ${({invert}) => (invert ? lightGreyAlpha(0.5) : lightBeetrootPurpleAlpha(0.5))};
      cursor: not-allowed;
      box-shadow: none;
    `}
`

// * Link variant

function linkColor({disabled, invert}) {
  if (disabled) {
    return invert ? lightGreyAlpha(0.5) : lightBeetrootPurpleAlpha(0.5)
  }
  return invert ? white : berryBlue
}

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

  color: ${props => props.color};

  ${props =>
    props.loading &&
    css`
      cursor: progress;
    `}
`

// * Flat variant

function flatColor({disabled, invert}) {
  if (disabled) {
    return invert ? lightGreyAlpha(0.5) : lightBeetrootPurpleAlpha(0.5)
  }
  return invert ? white : berryBlue
}

const FlatButton = styled(ResetButton)`
  color: ${props => props.color};

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

// * Filter variant

function filterColor({disabled, invert}) {
  if (disabled) {
    return invert ? lightGreyAlpha(0.5) : lightBeetrootPurpleAlpha(0.5)
  }

  return invert ? darkGrey : white
}

const FilterButton = styled(ResetButton)`
  /* The padding is ruled by the text, not the button. */
  padding: 0;

  border-radius: 20px;
  border: 1px solid ${props => (props.invert ? darkGrey : 'transparent')};
  height: ${props => (props.mobile ? 32 : 40)}px;
  background: ${({invert, backgroundColor}) => backgroundColor || (invert ? white : berryBlue)};
`

const FilterText = styled.div`
  ${props => (props.mobile ? body3Css : body1Css)};

  color: ${props => props.color};
  padding: ${props => (props.mobile ? '6px 18px' : '8px 24px')};
`

function textStyle(leftIcon, rightIcon) {
  return {
    paddingRight: rightIcon ? 8 : undefined,
    paddingLeft: leftIcon ? 8 : undefined
  }
}

const Button = React.forwardRef(function Button(
  {
    label,
    rightIcon,
    leftIcon,
    onClick,
    variant,
    invert,
    textColor,
    backgroundColor,
    href,
    disabled,
    loading,
    mobile,
    ...props
  },
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
      case 'filter':
        return FilterButton
      default:
        return DefaultButton
    }
  }, [variant])

  const ButtonLabel = React.useMemo(() => {
    switch (variant) {
      case 'flat':
      case 'link':
        return ActionText
      case 'filter':
        return FilterText
      case 'primary':
      default:
        return DefaultButtonText
    }
  }, [variant])

  const colorFn = React.useMemo(
    () =>
      variant === 'primary'
        ? primaryColor
        : variant === 'flat'
        ? flatColor
        : variant === 'link'
        ? linkColor
        : variant === 'filter'
        ? filterColor
        : defaultColor,
    [variant]
  )

  const color = React.useMemo(() => {
    const color = colorFn({disabled, invert})
    if (disabled) {
      return color
    }

    // ? The textColor override takes precedence over the normal color, not the disabled one.
    if (textColor) {
      return textColor
    }

    return color
  }, [variant, disabled, invert, textColor])

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
      mobile={mobile}
      backgroundColor={backgroundColor}
      {...props}
    >
      {loading ? (
        <Loader inline color={loaderColor} />
      ) : (
        <>
          {leftIcon && React.cloneElement(leftIcon, {style: {color}})}
          <ButtonLabel style={textStyle(leftIcon, rightIcon)} invert={invert} color={color} mobile={mobile}>
            {label}
          </ButtonLabel>
          {rightIcon && React.cloneElement(rightIcon, {style: {color}})}
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
  variant: PropTypes.oneOf(['primary', 'flat', 'link', 'filter']),
  /** Inverse button colors to display on beetrootPurple background */
  invert: PropTypes.bool,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  mobile: PropTypes.bool
}

export default Button
