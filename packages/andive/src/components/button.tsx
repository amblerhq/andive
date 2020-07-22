import React from 'react'
import styled, { css, StyledComponent } from 'styled-components'

import * as palette from '../constants/palette'
import { Body2, body1Css, body2Css, body3Css } from './typography'
import Loader from './loader'
import { ButtonGroupContext } from './button-group'
import Box from './box'

const lightGreyAlpha = palette.hexToRGBA(palette.mediumPrimary, 0.5)
const lightBeetrootPurpleAlpha = palette.hexToRGBA(
  palette.mediumBeetrootPurple,
  0.5
)
const mediumBeetrootPurpleAlpha = palette.hexToRGBA(
  palette.darkBeetrootPurple,
  0.5
)

interface ButtonProps {
  className?: string
  label?: string
  rightIcon?: JSX.Element
  leftIcon?: JSX.Element
  onClick?: (ev: MouseEvent) => void
  variant?: 'primary' | 'flat' | 'filter'
  invert?: boolean
  backgroundColor?: string
  textColor?: string
  disabled?: boolean
  loading?: boolean
  small?: boolean
  mobile?: boolean
  wrap?: boolean
  fill?: boolean
  width?: number
}
// eslint-disable-next-line no-unused-vars
const ButtonWrapper = styled(({ loading, invert, fill, ...props }) => (
  <div {...props} />
)).attrs({
  'data-andive-type': 'button'
})<{
  fill?: boolean
  disabled?: boolean
  loading?: boolean
  variant: 'primary' | 'flat' | 'filter'
  invert?: boolean
  mobile?: boolean
}>`
  min-width: 40px;
  min-height: 40px;

  display: ${props => (props.fill ? 'block' : 'inline-block')};

  padding: ${props =>
    props.variant !== 'flat' ? `${props.theme.padding}px` : 0};
  cursor: ${props =>
    props.disabled ? 'not-allowed' : props.loading ? 'progress' : 'pointer'};

  ${props =>
    props.variant === 'flat' &&
    !props.disabled &&
    !props.loading &&
    css`
      &:hover {
        background-color: ${props.invert
          ? palette.hexToRGBA(palette.darkGrey, 0.2)
          : props.theme.hover.backgroundColor};
        border-radius: ${props.theme.hover.borderRadius}px;
      }
    `}

  & *[data-andive-type="typography"] {
    text-transform: uppercase;
    font-size: ${props => (props.mobile ? 14 : 16)}px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`

const ResetButton = styled(
  // eslint-disable-next-line no-unused-vars
  React.forwardRef<
    HTMLButtonElement,
    Pick<
      ButtonProps,
      'loading' | 'invert' | 'backgroundColor' | 'small' | 'mobile' | 'wrap'
    > & { minWidth?: number; primary: boolean }
  >(
    (
      {
        loading,
        invert,
        backgroundColor,
        small,
        mobile,
        wrap,
        primary,
        minWidth,
        ...props
      },
      ref
    ) => <button ref={ref} {...props} />
  )
)<{ wrap?: boolean }>`
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

// * Default/secondary variant

function defaultColor({ disabled }) {
  if (disabled) {
    return lightBeetrootPurpleAlpha
  }

  return palette.mediumBeetrootPurple
}

const DefaultButton = styled(ResetButton)<{
  color?: string
  minWidth?: number
  small?: boolean
  mobile?: boolean
  backgroundColor?: string
  width?: number
  disabled?: boolean
  loading?: boolean
}>`
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
      min-width: ${props.small ? 0 : props.minWidth}px;
    `}
  ${props =>
    props.width &&
    css`
      width: ${props.width}px;
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
      min-width: ${props.mobile ? 40 : 56}px;
    `}
`

// * Primary/main variant

function primaryColor({ disabled }: { disabled?: boolean }) {
  if (disabled) {
    return palette.hexToRGBA(palette.white, 0.6)
  }

  return palette.white
}

const PrimaryButton = styled(DefaultButton)<{
  invert?: boolean
  backgroundColor?: string
  disabled?: boolean
}>`
  border: 1px solid
    ${props => (props.invert ? palette.white : palette.mediumBeetrootPurple)};
  background-color: ${props =>
    props.backgroundColor || palette.mediumBeetrootPurple};
  color: ${props => props.color};
  border-radius: 28px;
  box-shadow: 0 2px 5px 0 ${palette.hexToRGBA(palette.darkPrimary, 0.2)};

  ${props =>
    props.disabled &&
    css`
      background: ${lightBeetrootPurpleAlpha};
      border: 1px solid ${props.invert ? lightGreyAlpha : 'transparent'};
      box-shadow: none;
    `}
`

// * Flat variant

function flatColor({
  disabled,
  invert
}: {
  disabled?: boolean
  invert?: boolean
}) {
  if (disabled) {
    return invert
      ? palette.hexToRGBA(palette.white, 0.6)
      : palette.hexToRGBA(palette.mediumBerryBlue, 0.6)
  }

  return invert ? palette.white : palette.mediumBerryBlue
}

const FlatButton = styled(ResetButton)<{ color?: string }>`
  color: ${props => props.color};
`

// * Filter variant

function filterColor({
  disabled,
  invert
}: {
  disabled?: boolean
  invert?: boolean
}) {
  if (disabled) {
    return invert ? lightGreyAlpha : mediumBeetrootPurpleAlpha
  }

  return invert ? palette.darkPrimary : palette.white
}

const FilterButton = styled(ResetButton)<{
  invert?: boolean
  mobile?: boolean
  backgroundColor?: string
}>`
  /* The padding is ruled by the text, not the button. */
  padding: 0;

  border-radius: 20px;
  border: 1px solid
    ${props => (props.invert ? palette.darkPrimary : 'transparent')};
  height: ${props => (props.mobile ? 32 : 40)}px;
  background: ${({ invert, backgroundColor }) =>
    backgroundColor || (invert ? palette.white : palette.mediumBerryBlue)};
`

const FilterText = styled(({mobile, color, ...props}) => <div {...props} />)<{ mobile?: boolean; color: string }>`
  ${props => (props.mobile ? body3Css : body1Css)};

  color: ${props => props.color};
  padding: ${props => (props.mobile ? '6px 18px' : '8px 24px')};
`

const FlatText = styled.div<{ mobile?: boolean; color: string }>`
  ${body2Css};

  color: ${props => props.color};
`

const Flexbox = styled(Box)`
  display: flex;
`

function textStyle(
  leftIcon?: React.ReactNode,
  rightIcon?: React.ReactNode,
  label?: string
) {
  return {
    paddingRight: label && rightIcon ? 8 : undefined,
    paddingLeft: label && leftIcon ? 8 : undefined
  }
}

const Button = React.forwardRef(function Button(
  {
    className,
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
    fill,
    ...props
  }: ButtonProps,
  ref
) {
  React.useEffect(() => {
    if (variant === 'flat') {
      console.warn(
        "Andive: variant == 'flat' on Button component is deprecated. Use FlatButton instead."
      )
    }
  }, [variant])

  const buttonGroupContext = React.useContext<any>(ButtonGroupContext)

  // TODO: Type this properly
  const ButtonComponent = React.useMemo<any>(() => {
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

  const ButtonLabel = React.useMemo<
    StyledComponent<
      'div',
      any,
      { invert?: boolean; color?: string; mobile?: boolean }
    >
  >(() => {
    if (variant === 'filter') {
      return FilterText
    }

    if (variant === 'flat') {
      return FlatText
    }

    return Body2
  }, [variant])

  const color = React.useMemo<string>(() => {
    // ? The textColor override takes precedence over the normal color, but not the disabled one.
    if (!disabled && textColor) {
      return textColor
    }

    return variant === 'primary'
      ? primaryColor({ disabled })
      : variant === 'flat'
      ? flatColor({ invert, disabled })
      : variant === 'filter'
      ? filterColor({ invert, disabled })
      : defaultColor({ disabled })
  }, [variant, disabled, textColor, invert])

  const loaderColor = React.useMemo(() => {
    if (!loading) {
      return
    }

    if (variant === 'primary') {
      return palette.white
    }

    if (variant === 'flat') {
      return invert ? palette.white : palette.mediumBerryBlue
    }

    return palette.mediumBeetrootPurple
  }, [variant, loading, invert])

  const contentJsx = (
    <>
      {leftIcon && React.cloneElement(leftIcon, { color })}
      <ButtonLabel
        style={textStyle(leftIcon, rightIcon, label)}
        invert={invert}
        color={color}
        mobile={mobile}
      >
        {label}
      </ButtonLabel>
      {rightIcon && React.cloneElement(rightIcon, { color })}
    </>
  )

  return (
    <ButtonWrapper
      className={className}
      disabled={disabled}
      loading={loading}
      invert={invert}
      variant={variant}
      mobile={mobile}
      fill={fill}
    >
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
        color={color}
        minWidth={buttonGroupContext ? buttonGroupContext.minWidth : undefined}
        small={buttonGroupContext ? buttonGroupContext.small : undefined}
        wrap={wrap}
        {...props}
      >
        {loading ? (
          <Loader inline color={loaderColor} />
        ) : variant === 'flat' ? (
          <Flexbox>{contentJsx}</Flexbox>
        ) : (
          contentJsx
        )}
      </ButtonComponent>
    </ButtonWrapper>
  )
})

export default Button
