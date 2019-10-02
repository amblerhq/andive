import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import * as palette from '../../constants/palette'

const BlockRoot = styled.div`
  padding: 8px;
  background-color: ${props => props.backgroundColor};
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  border-radius: 4px;
`

const Icon = styled.div`
  padding-right: 8px;
`

/**
 * A informative block of color.
 *
 * Variant = success | error | warning
 *
 * @param {Variant} variant
 */
function Block({icon, variant, className, children}) {
  const textColor =
    variant === 'success'
      ? palette.successText
      : variant === 'error'
      ? palette.errorText
      : variant === 'warning'
      ? palette.warningText
      : variant === 'info'
      ? palette.darkBeetrootPurple
      : palette.black

  const backgroundColor =
    variant === 'success'
      ? palette.lightLettuceGreen
      : variant === 'error'
      ? palette.lightRadishRed
      : variant === 'warning'
      ? palette.lightPotatoYellow
      : variant === 'info'
      ? palette.hexToRGBA(palette.lightBeetrootPurple, 0.6)
      : palette.white

  return (
    <BlockRoot className={className} backgroundColor={backgroundColor}>
      {icon ? <Icon>{React.cloneElement(icon, {color: textColor})}</Icon> : null}
      {/** Passing the color, expecting a Label/Item/LabelIcon component or else the custom children to use the color */}
      <div>{React.Children.map(children, child => React.cloneElement(child, {color: textColor}))}</div>
    </BlockRoot>
  )
}

Block.propTypes = {
  icon: PropTypes.node,
  variant: PropTypes.oneOf(['success', 'error', 'warning', 'info']).isRequired,
  className: PropTypes.string,
  children: PropTypes.node
}

export default Block
