import React, {ReactChild} from 'react'
import styled from 'styled-components'

import * as palette from '../../constants/palette'

const BlockRoot = styled.div<{backgroundColor: string}>`
  padding: 8px;
  background-color: ${props => props.backgroundColor};
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  border-radius: 4px;
`

const Icon = styled.div`
  padding-right: 16px;
`

type BlockVariant = 'success' | 'error' | 'warning' | 'info' | 'disabled'
interface Props {
  icon: any
  variant?: BlockVariant
  colors?: {forground: string; background: string}
  className?: string
  children?: ReactChild
}

/**
 * A informative block of color.
 *
 * Variant = success | error | warning
 *
 * @param {Variant} variant
 */
function Block({icon, variant, colors, className, children}: Props) {
  const textColor: string = colors
    ? colors.forground
    : variant === 'success'
    ? palette.successText
    : variant === 'error'
    ? palette.errorText
    : variant === 'warning'
    ? palette.warningText
    : variant === 'info'
    ? palette.darkBeetrootPurple
    : variant === 'disabled'
    ? palette.darkPrimary
    : palette.black

  const backgroundColor: string = colors
    ? colors.background
    : variant === 'success'
    ? palette.lightLettuceGreen
    : variant === 'error'
    ? palette.lightRadishRed
    : variant === 'warning'
    ? palette.lightPotatoYellow
    : variant === 'info'
    ? palette.lightBeetrootPurple
    : variant === 'disabled'
    ? palette.darkGrey
    : palette.white

  // TODO: Fix the icon's React.cloneElement issue (remove the 'as any' cast to see).
  return (
    <BlockRoot className={className} backgroundColor={backgroundColor}>
      {icon && React.isValidElement(icon) ? <Icon>{React.cloneElement(icon, {color: textColor} as any)}</Icon> : null}
      {/** Passing the color, expecting a Label/Item/LabelIcon component or else the custom children to use the color */}
      <div>
        {React.Children.map(children, child =>
          React.isValidElement(child) ? React.cloneElement(child, {color: textColor}) : null
        )}
      </div>
    </BlockRoot>
  )
}

export default Block
