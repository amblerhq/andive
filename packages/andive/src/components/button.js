import React from 'react'
import styled, {css} from 'styled-components'
import PropTypes from 'prop-types'

import * as palette from '../constants/palette'
import {Body2, body1Css, body3Css} from './typography'
import Loader from './loader'
import {ButtonGroupContext} from './button-group'

const lightGreyAlpha = palette.hexToRGBA(palette.mediumPrimary, 0.5)
const lightBeetrootPurpleAlpha = palette.hexToRGBA(palette.mediumBeetrootPurple, 0.5)
const mediumBeetrootPurpleAlpha = palette.hexToRGBA(palette.darkBeetrootPurple, 0.5)

// eslint-disable-next-line no-unused-vars
const ButtonRoot = styled(({loading, invert, ...props}) => <div {...props} />).attrs({
  'data-andive-type': 'button'
})`
  display: inline-block;

  padding: ${props => props.theme.padding}px;
  cursor: ${props => (props.disabled ? 'not-allowed' : props.loading ? 'progress' : 'pointer')};

  ${props =>
    props.variant === 'flat' &&
    !props.disabled &&
    !props.loading &&
    css`
      &:hover {
        background-color: ${props =>
          props.invert ? palette.hexToRGBA(palette.darkGrey, 0.2) : props.theme.hover.backgroundColor};
        border-radius: ${props => props.theme.hover.borderRadius}px;
      }
    `}
`

const ResetButton = styled(
  // eslint-disable-next-line no-unused-vars
  React.forwardRef(({loading, invert, primary, backgroundColor, minWidth, small, mobile, ...props}, ref) => (
    <button ref={ref} {...props} />
  ))
)`
  outline: none;
  border: none;
  background: none;
  cursor: inherit;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  ${props =>
    props.wrap
      ? css`
          text-align: left;
        `
      : css`
          text-overflow: ellipsis;
          white-space: nowrap;
        `}
`

const DefaultButtonText = styled(Body2)`
  text-transform: uppercase;
  font-size: ${props => (props.mobile ? 14 : 16)}px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

// * Default/secondary variant

function defaultColor({disabled}) {
  if (disabled) {
    return lightBeetrootPurpleAlpha
  }

  return palette.mediumBeetrootPurple
}

const DefaultButton = styled(ResetButton)`
  border: 1px solid ${palette.mediumBeetrootPurple};
  background-color: ${props => props.backgroundColor || palette.white};
  color: ${props => props.color};
  height: ${props => (props.mobile ? 40 : 56)}px;
  border-radius: 28px;
  box-shadow: 0 2px 5px 0 rgba(5, 71, 82, 0.2);

  padding: ${props => (props.mobile ? '8px 16px' : '16px 24px')};

  min-width: 200px;
  ${props =>
    (props.minWidth || props.small) &&
    css`
      min-width: ${props => (props.small ? 0 : props.minWidth)}px;
    `}

  ${props =>
    props.disabled &&
    css`
      background-color: ${palette.lightGrey};
      border: 1px solid ${lightGreyAlpha};
      box-shadow: none;
    `}

  ${props =>
    props.loading &&
    css`
      padding: 0;
      min-width: ${props => (props.mobile ? 40 : 56)}px;
    `}
`

// * Primary/main variant

function primaryColor({disabled}) {
  if (disabled) {
    return palette.hexToRGBA(palette.white, 0.6)
  }

  return palette.white
}

const PrimaryButton = styled(DefaultButton)`
  border: 1px solid ${props => (props.invert ? palette.white : palette.mediumBeetrootPurple)};
  background-color: ${props => props.backgroundColor || palette.mediumBeetrootPurple};
  color: ${props => props.color};
  border-radius: 28px;
  box-shadow: 0 2px 5px 0 ${palette.hexToRGBA(palette.darkPrimary, 0.2)};

  ${props =>
    props.disabled &&
    css`
      background: ${lightBeetrootPurpleAlpha};
      border: 1px solid ${({invert}) => (invert ? lightGreyAlpha : 'transparent')};
      box-shadow: none;
    `}
`

// * Flat variant

function flatColor({disabled, invert}) {
  if (disabled) {
    return invert ? palette.hexToRGBA(palette.white, 0.6) : palette.hexToRGBA(palette.mediumBerryBlue, 0.6)
  }

  return invert ? palette.white : palette.mediumBerryBlue
}

const FlatButton = styled(ResetButton)`
  color: ${props => props.color};
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
    wrap,
    ...props
  },
  ref
) {
  const buttonGroupContext = React.useContext(ButtonGroupContext)

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
        return palette.white
      case 'flat':
        return invert ? palette.white : palette.mediumBerryBlue
      default:
        return palette.mediumBeetrootPurple
    }
  }, [variant, loading, invert])

  return (
    <ButtonRoot disabled={disabled} loading={loading} invert={invert} variant={variant}>
      <ButtonComponent
        ref={ref}
        onClick={!disabled && !loading ? onClick : undefined}
        type="button"
        primary={variant === 'primary'}
        invert={invert}
        disabled={disabled}
        loading={['flat', 'filter'].includes(variant) ? undefined : loading}
        mobile={mobile}
        backgroundColor={backgroundColor}
        color={color}
        minWidth={buttonGroupContext ? buttonGroupContext.minWidth : undefined}
        small={buttonGroupContext ? buttonGroupContext.small : undefined}
        wrap={wrap}
        {...props}
      >
        {loading ? (
          <Loader inline color={loaderColor} />
        ) : (
          <>
            {leftIcon && React.cloneElement(leftIcon, {color})}
            <ButtonLabel style={textStyle(leftIcon, rightIcon)} invert={invert} color={color} mobile={mobile}>
              {label}
            </ButtonLabel>
            {rightIcon && React.cloneElement(rightIcon, {color})}
          </>
        )}
      </ButtonComponent>
    </ButtonRoot>
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
  mobile: PropTypes.bool,
  wrap: PropTypes.bool
}

export default Button
