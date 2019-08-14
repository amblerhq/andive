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
      : palette.darkGrey

  const backgroundColor =
    variant === 'success'
      ? palette.success
      : variant === 'error'
      ? palette.error
      : variant === 'warning'
      ? palette.warning
      : palette.white

  return (
    <BlockRoot className={className} backgroundColor={backgroundColor}>
      {icon ? <Icon>{React.cloneElement(icon, {color: textColor})}</Icon> : null}
      {/** Passing the color, expecting a Label/Item/LabelIcon component or else the custom children to use the color */}
      {React.cloneElement(children, {color: textColor})}
    </BlockRoot>
  )
}

Block.propTypes = {
  icon: PropTypes.node,
  variant: PropTypes.oneOf(['success', 'error', 'warning']).isRequired,
  className: PropTypes.string,
  children: PropTypes.node
}

export default Block
