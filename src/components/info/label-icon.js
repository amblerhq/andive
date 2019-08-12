import React from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'

import {Body1} from '../typography'

const LabelIcon = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`

const Label = styled(Body1)`
  padding-left: 8px;
`

const IconWrapper = styled.div`
  width: ${props => props.iconSize}px;
`

export default function LabelIconComponent({icon, iconSize = 24, label, ...props}) {
  return (
    <LabelIcon {...props}>
      {icon ? <IconWrapper iconSize={iconSize}>{icon}</IconWrapper> : null} <Label>{label}</Label>
    </LabelIcon>
  )
}

LabelIconComponent.propTypes = {
  icon: PropTypes.node.isRequired,
  iconSize: PropTypes.number,
  label: PropTypes.string.isRequired
}
