import React from 'react'
import styled, {css} from 'styled-components'
import PropTypes, {bool} from 'prop-types'

import * as palette from '../constants/palette'

import {H1, Body1} from './typography'

const CardRoot = styled.div`
  background: white;
  padding: 16px;
  border-radius: 4px;
  border: 1px solid ${props => (props.shadow ? palette.border : 'none')};
  ${props =>
    props.shadow &&
    css`
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    `};
`

const CardTitle = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  padding: 8px;
`

const CardBody = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  padding: 8px;
  text-align: justify;
`

export const Divider = styled.div`
  width: 100%;
  height: 17px;
  padding: 8px;

  position: relative;

  ::after {
    content: '';
    position: absolute;
    width: calc(100% ${props => (props.fullWidthDivider ? '+ 32px' : '- 16px')});
    height: 1px;
    top: 8px;
    left: ${props => (props.fullWidthDivider ? '-16px' : '8px')}
    background: #eee;
  }
`

export function Card({title, children, shadow, fullWidthDivider = false}) {
  return (
    <CardRoot shadow={shadow}>
      <CardTitle>
        <H1>{title}</H1>
      </CardTitle>

      <Divider fullWidthDivider={fullWidthDivider} />

      <CardBody>
        <Body1>{children}</Body1>
      </CardBody>
    </CardRoot>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  shadow: PropTypes.bool,
  fullWidthDivider: PropTypes.bool
}

export default Card
