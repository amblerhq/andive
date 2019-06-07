import React from 'react'
import styled, {css} from 'styled-components'
import PropTypes from 'prop-types'

const SvgRoot = styled.div`
  ${props =>
    props.color &&
    css`
      svg,
      path,
      g,
      circle {
        stroke: ${props => props.color};
        fill: transparent;
      }
    `}
`

const IconRoot = styled(SvgRoot)`
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

const Icon = ({circle, circleColor, color, children, iconProps, inline, ...props}) => {
  const size = children.props.width

  if (inline) {
    return <SvgRoot color={color}>{React.cloneElement(children, {...(iconProps || props || {})})}</SvgRoot>
  }

  return (
    <IconRoot circleColor={circleColor} circle={circle} color={color} {...props}>
      <IconWrapper size={size}>{React.cloneElement(children, {...(iconProps || {})})}</IconWrapper>
    </IconRoot>
  )
}

Icon.propTypes = {
  children: PropTypes.node.isRequired,
  circle: PropTypes.bool,
  circleColor: PropTypes.string,
  color: PropTypes.string,
  iconProps: PropTypes.object,
  inline: PropTypes.bool
}

export default Icon
