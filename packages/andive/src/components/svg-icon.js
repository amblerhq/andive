import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const getWidth = props => (props.circle ? 32 : props.size || 32)

const SvgRoot = styled.div`
  color: ${props => props.color};
  width: ${getWidth}px;
  height: ${getWidth}px;
`

const IconRoot = styled(({size, circleColor, circle, ...props}) => <SvgRoot size={size} {...props} />)`
  position: relative;
  flex: 0 0 ${getWidth}px;

  border-radius: ${props => (props.circle ? '50%' : 0)};
  background: ${props => (props.circle ? props.circleColor || '#ededed' : 'transparent')};
  & > * {
    position: absolute;
    top: calc(50% - ${props => props.size / 2}px);
    left: calc(50% - ${props => props.size / 2}px);
  }
`

const Icon = ({circle, circleColor, color, children, iconProps, inline, size, ...props}) => {
  if (inline) {
    return (
      <SvgRoot color={color} size={size}>
        {React.cloneElement(children, {...(iconProps || props || {})})}
      </SvgRoot>
    )
  }

  return (
    <IconRoot size={size} circleColor={circleColor} circle={circle} color={color} {...props}>
      {React.cloneElement(children, {...(iconProps || {})})}
    </IconRoot>
  )
}

Icon.propTypes = {
  children: PropTypes.node,
  circle: PropTypes.bool,
  circleColor: PropTypes.string,
  color: PropTypes.string,
  iconProps: PropTypes.object,
  inline: PropTypes.bool
}

export default Icon
