import React, {forwardRef} from 'react'
import styled, {css} from 'styled-components'
import PropTypes from 'prop-types'

import Item from './item'
import Label from './label'
import LabelIcon from './label-icon'
import Block from './block'

const Info = styled.div`
  padding: ${props => props.theme.padding}px;
  width: ${props => (props.fullWidth ? '100%' : 'auto')};

  ${({hasIcon, iconSize}) =>
    hasIcon &&
    css`
      position: relative;
      padding-left: ${iconSize + 16 + 8}px;
      padding-top: 12px;
      min-height: ${iconSize + 16}px;
    `}
`

const InfoIcon = styled.div`
  position: absolute;
  left: 8px;
  top: 8px;
`

const InfoComponent = forwardRef(function InfoComponent({children, icon, iconSize = 24, fullWidth, ...props}, ref) {
  const hasIcon = !!icon

  return (
    <Info ref={ref} hasIcon={hasIcon} iconSize={iconSize} fullWidth={fullWidth} {...props}>
      {hasIcon && <InfoIcon>{icon}</InfoIcon>}
      {children}
    </Info>
  )
})

InfoComponent.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.node,
  iconSize: PropTypes.number,
  fullWidth: PropTypes.bool
}

InfoComponent.Label = Label
InfoComponent.LabelIcon = LabelIcon
InfoComponent.Item = Item
InfoComponent.Block = Block

export default InfoComponent
