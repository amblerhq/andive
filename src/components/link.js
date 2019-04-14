import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {actionCss, body3Css} from './typography'

const Link = styled.div`
  ${props => (props.invert ? body3Css : actionCss)}

  width: ${props => (props.fullWidth ? '100%' : 'auto')};
  padding: 8px;

  display: flex;
  flex-flow: ${props => (props.reverse ? 'row-reverse' : 'row')};
  align-items: center;

  position: relative;
`

const iconStyle = ({reverse, size}) => ({
  position: 'absolute',
  left: reverse ? `calc(100% - ${size}px - 8px)` : 8,
  top: `calc(50% - ${size / 2}px)`,
  pointerEvents: 'none'
})

function LinkComponent({label, icon, extend, reverse, invert, fullWidth, ...props}) {
  const hasIcon = !!icon

  const aStyle = {
    textDecoration: 'none',
    color: 'inherit'
  }

  if (hasIcon) {
    aStyle.paddingRight = reverse ? icon.type.size + 8 : 0
    aStyle.paddingLeft = reverse ? 0 : icon.type.size + 8
  }

  const A = props =>
    React.cloneElement(extend, {
      style: aStyle,
      ...props
    })

  return (
    <Link reverse={reverse} invert={invert} fullWidth={fullWidth} {...props}>
      {hasIcon && React.cloneElement(icon, {style: iconStyle({reverse, size: icon.type.size})})}
      <A>{label}</A>
    </Link>
  )
}

LinkComponent.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.node,
  iconSize: PropTypes.number,
  extend: PropTypes.node,
  style: PropTypes.object,
  reverse: PropTypes.bool,
  invert: PropTypes.bool,
  fullWidth: PropTypes.bool
}

export default LinkComponent
