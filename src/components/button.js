import React from 'react'
import styled, {css} from 'styled-components'
import PropTypes from 'prop-types'

import * as palette from '../constants/palette'
import {Body2, body1Css, body3Css} from './typography'
import Loader from './loader'

const lightGreyAlpha = palette.hexToRGBA(palette.mediumPrimary, 0.5)
const lightBeetrootPurpleAlpha = palette.hexToRGBA(palette.mediumBeetrootPurple, 0.5)
const mediumBeetrootPurpleAlpha = palette.hexToRGBA(palette.darkBeetrootPurple, 0.5)

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
    return invert ? lightGreyAlpha : lightBeetrootPurpleAlpha
  }

  return invert ? palette.white : palette.mediumBeetrootPurple
}

const DefaultButton = styled(ResetButton)`
  border: 1px solid ${({invert}) => (invert ? palette.white : palette.mediumBeetrootPurple)};
  background-color: ${({invert, backgroundColor}) =>
    backgroundColor || (invert ? palette.mediumBeetrootPurple : palette.white)};
  color: ${props => props.color};
  height: ${props => (props.mobile ? 40 : 56)}px;
  border-radius: 28px;
  box-shadow: 0 2px 5px 0 rgba(5, 71, 82, 0.2);

  padding: ${props => (props.mobile ? '8px 16px' : '16px 24px')};

  ${props =>
    props.disabled &&
    css`
      background-color: ${({invert}) => (invert ? palette.mediumBeetrootPurple : palette.mediumPrimary)};
      border: 1px solid ${({invert}) => (invert ? lightGreyAlpha : mediumBeetrootPurpleAlpha)};
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
    return invert ? mediumBeetrootPurpleAlpha : palette.mediumPrimary
  }
  return invert ? palette.mediumBeetrootPurple : palette.white
}

const PrimaryButton = styled(DefaultButton)`
  border: 1px solid ${palette.mediumBeetrootPurple};
  background-color: ${({invert, backgroundColor}) =>
    backgroundColor || (invert ? palette.white : palette.mediumBeetrootPurple)};
  color: ${props => props.color};
  border-radius: 28px;
  box-shadow: 0 2px 5px 0 rgba(5, 71, 82, 0.2);

  ${props =>
    props.disabled &&
    css`
      background: ${({invert}) => (invert ? lightGreyAlpha : mediumBeetrootPurpleAlpha)};
      border: 1px solid ${({invert}) => (invert ? lightGreyAlpha : mediumBeetrootPurpleAlpha)};
      cursor: not-allowed;
      box-shadow: none;
    `}
`

// * Flat variant

function flatColor({disabled, invert}) {
  if (disabled) {
    return invert ? lightGreyAlpha : mediumBeetrootPurpleAlpha
  }
  return invert ? palette.white : palette.mediumBerryBlue
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
    return invert ? lightGreyAlpha : mediumBeetrootPurpleAlpha
  }

  return invert ? palette.darkPrimary : palette.white
}

const FilterButton = styled(ResetButton)`
  /* The padding is ruled by the text, not the button. */
  padding: 0;

  border-radius: 20px;
  border: 1px solid ${props => (props.invert ? palette.darkPrimary : 'transparent')};
  height: ${props => (props.mobile ? 32 : 40)}px;
  background: ${({invert, backgroundColor}) => backgroundColor || (invert ? palette.white : palette.mediumBerryBlue)};
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
    disabled,
    loading,
    mobile,
    ...props
  },
  ref
) {
  const ButtonComponent = React.useMemo(() => {
    switch (variant) {
      case 'primary':
        return PrimaryButton
      case 'flat':
        return FlatButton
      case 'filter':
        return FilterButton
      default:
        return DefaultButton
    }
  }, [variant])

  const ButtonLabel = React.useMemo(() => {
    switch (variant) {
      case 'flat':
        return Body2
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
        return invert ? palette.mediumBeetrootPurple : palette.white
      case 'flat':
        return invert ? palette.white : palette.mediumBerryBlue
      default:
        return invert ? palette.white : palette.mediumBeetrootPurple
    }
  }, [variant, loading, invert])

  return (
    <ButtonComponent
      ref={ref}
      onClick={!disabled && !loading ? onClick : undefined}
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
  /** Change the button look to "primary", "flat", or undefined (defautlt) */
  variant: PropTypes.oneOf(['primary', 'flat', 'filter']),
  /** Inverse button colors to display on beetrootPurple background */
  invert: PropTypes.bool,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  mobile: PropTypes.bool
}

export default Button
