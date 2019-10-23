import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import * as palette from '../constants/palette'
import {body2Css} from '../components/typography'

const Card = styled.div`
  box-sizing: border-box;
  padding: ${props => (props.compact ? '32px 8px 8px 8px' : '24px 16px 16px 16px')};
  margin: 8px;

  min-height: ${props => (props.compact ? 64 : 128)}px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid ${palette.mediumGrey};
  border-radius: 8px;
  margin-bottom: 8px;

  position: relative;

  background-color: ${props => (props.invert ? palette.mediumBeetrootPurple : '#eee')};
`

const Squared = styled(Card)`
  flex-flow: column nowrap;

  margin-right: 8px;
  margin-bottom: 8px;

  width: ${props => props.size || 128}px;
  height: ${props => props.size || 128}px;
`

const Legend = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;

  ${body2Css}

  color: ${props => (props.invert ? palette.white : palette.darkPrimary)};
  font-size: ${props => (props.compact ? 14 : 16)}px;
`

export default function Showcase({legend, invert, variant, children, size, ...props}) {
  const C = variant === 'squared' ? Squared : Card

  return (
    <C invert={invert} compact={variant === 'compact'} size={size} {...props}>
      <Legend invert={invert} compact={variant === 'compact'}>
        {legend}
      </Legend>
      {children}
    </C>
  )
}

Showcase.propTypes = {
  legend: PropTypes.string,
  invert: PropTypes.bool,
  variant: PropTypes.oneOf(['compact', 'squared']),
  children: PropTypes.node,
  size: PropTypes.number
}
