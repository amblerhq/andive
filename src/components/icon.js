import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const IconRoot = styled.div`
  position: relative;

  width: 32px;
  height: 32px;

  border-radius: ${props => (props.circle ? '50%' : 0)};
  background: ${props => (props.circle ? props.circleColor || '#ededed' : 'inherit')};
`

const IconWrapper = styled.div`
  position: absolute;

  top: calc(50% - ${props => props.size / 2}px);
  left: calc(50% - ${props => props.size / 2}px);
`

const Icon = ({circle, circleColor, children, iconProps, inline, ...props}) => {
  const size = children.props.width

  if (inline) {
    return React.cloneElement(children, {color: 'white', ...(iconProps || props || {})})
  }

  return (
    <IconRoot circleColor={circleColor} circle={circle} {...props}>
      <IconWrapper size={size}>{React.cloneElement(children, {color: 'white', ...(iconProps || {})})}</IconWrapper>
    </IconRoot>
  )
}

Icon.propTypes = {
  children: PropTypes.node.isRequired,
  circle: PropTypes.bool,
  circleColor: PropTypes.string,
  iconProps: PropTypes.object,
  inline: PropTypes.bool
}

export default Icon
