import React, {forwardRef} from 'react'
import styled, {css} from 'styled-components'
import PropTypes from 'prop-types'

import {baselineCss} from '../baseline'
import Item from './item'
import Label from './label'
import LabelIcon from './label-icon'

const Info = styled.div`
  ${baselineCss}

  padding: 8px;
  width: ${props => (props.fullWidth ? '100%' : 'auto')};

  ${props =>
    props.hasIcon &&
    css`
      position: relative;
      padding-left: 56px;
    `}
`

const InfoIcon = styled.div`
  position: absolute;
  left: 8px;
  top: calc(50% - 16px);
`

const InfoComponent = forwardRef(function InfoComponent({children, icon, fullWidth, ...props}, ref) {
  const hasIcon = !!icon

  return (
    <Info ref={ref} hasIcon={hasIcon} fullWidth={fullWidth} {...props}>
      {hasIcon && <InfoIcon>{icon}</InfoIcon>}
      {React.Children.map(children, child => (child ? React.cloneElement(child, {hasIcon}) : null))}
    </Info>
  )
})

InfoComponent.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.node,
  fullWidth: PropTypes.bool
}

InfoComponent.Label = Label
InfoComponent.LabelIcon = LabelIcon
InfoComponent.Item = Item

export default InfoComponent
